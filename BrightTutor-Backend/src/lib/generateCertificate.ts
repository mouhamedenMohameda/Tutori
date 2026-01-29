import { createCanvas, loadImage, registerFont, CanvasRenderingContext2D } from "canvas";
import path from "path";
import fs from "fs";

// Register fonts (only once, at module load)
const fontsRegistered = { niconne: false, poppins: false };

function registerFonts() {
  if (!fontsRegistered.niconne) {
    const niconnePath = path.join(process.cwd(), "public/fonts/Niconne-Regular.ttf");
    if (fs.existsSync(niconnePath)) {
      registerFont(niconnePath, { family: "Niconne" });
      fontsRegistered.niconne = true;
      console.log("✅ Registered Niconne font");
    } else {
      console.warn("⚠️ Niconne font not found at:", niconnePath);
    }
  }

  if (!fontsRegistered.poppins) {
    const poppinsPath = path.join(process.cwd(), "public/fonts/Poppins-Light.ttf");
    if (fs.existsSync(poppinsPath)) {
      registerFont(poppinsPath, { family: "Poppins" });
      fontsRegistered.poppins = true;
      console.log("✅ Registered Poppins font");
    } else {
      console.warn("⚠️ Poppins font not found at:", poppinsPath);
    }
  }
}

// Register fonts immediately when module loads
registerFonts();

export type CertificateData = {
  studentName: string;
  chapterNumber: number;
  chapterName: string;
  sectionTitle: string;
  beltLevel: string;
  subject: string;
  year: number;
  date: string;
};

export async function generateCertificate(data: CertificateData): Promise<Buffer> {
  const width = 1920;
  const height = 1080;
  
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext("2d");
  
  // Load background template (already contains all static text and graphics)
  const bgPath = path.join(process.cwd(), "public/certificate/certificate-bg.png");
  if (!fs.existsSync(bgPath)) {
    throw new Error(`Certificate background not found at: ${bgPath}`);
  }
  
  const bg = await loadImage(bgPath);
  ctx.drawImage(bg, 0, 0, width, height);
  
  // Calculate text X position (left side, approximately 15% from left edge)
  // Text should be left-aligned to match background design
  const textX = width * 0.15;
  
  // All text is black on beige background
  ctx.fillStyle = "#000000";
  ctx.textAlign = "left"; // Left align to match background
  ctx.textBaseline = "top";
  
  // ONLY ADD DYNAMIC TEXT OVERLAYS:
  
  // 1. STUDENT NAME (Niconne font, elegant script, large)
  // Position: On the underline that's already in the background image
  // Name needs to be way lower - around Y: 480-500 to match the underline in background
  ctx.font = "bold 85px 'Niconne', serif";
  const nameY = 480; // Position on the existing underline in background
  ctx.fillText(data.studentName, textX, nameY);
  
  // NO underline drawing - background already has it!
  
  // 2. CHAPTER INFO (Poppins Light, directly under the name)
  // Position: Below student name
  ctx.font = "42px 'Poppins', sans-serif";
  const chapterY = nameY + 120; // Directly below name
  ctx.fillText(`Chapitre ${data.chapterNumber} - ${data.chapterName} | ${data.sectionTitle}`, textX, chapterY);
  
  // 3. BOTTOM INFO (Poppins Light, three lines above medal icon)
  // Position: Bottom left, above medal icon (which is already in background)
  // Based on reference: appears around Y: 850-950
  let bottomY = 850; // Start above medal icon
  
  // Line 1: Belt level (e.g., "Blanche")
  ctx.font = "bold 38px 'Poppins', sans-serif";
  ctx.fillText(data.beltLevel, textX, bottomY);
  bottomY += 55;
  
  // Line 2: Subject and year (e.g., "Mathématiques Année 1")
  ctx.font = "32px 'Poppins', sans-serif";
  ctx.fillText(`${data.subject} Année ${data.year}`, textX, bottomY);
  bottomY += 50;
  
  // Line 3: Date (e.g., "6 janvier 2026")
  ctx.font = "28px 'Poppins', sans-serif";
  ctx.fillText(data.date, textX, bottomY);
  
  // Convert to PNG buffer
  return canvas.toBuffer("image/png");
}
