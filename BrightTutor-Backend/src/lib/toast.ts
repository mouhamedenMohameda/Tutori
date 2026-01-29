import { toast as toastHook } from "@/hooks/use-toast"

export const toast = {
  success: (message: string, title?: string) => {
    toastHook({
      title: title || "✅ Success",
      description: message,
      variant: "success",
    })
  },

  error: (message: string, title?: string) => {
    toastHook({
      title: title || "❌ Error",
      description: message,
      variant: "destructive",
    })
  },

  info: (message: string, title?: string) => {
    toastHook({
      title: title || "ℹ️ Info",
      description: message,
      variant: "default",
    })
  },

  warning: (message: string, title?: string) => {
    toastHook({
      title: title || "⚠️ Warning",
      description: message,
      variant: "default",
    })
  },
}

