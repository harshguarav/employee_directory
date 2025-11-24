import { useTheme } from "next-themes"
import { Toaster as Sonner } from "sonner"

type ToasterProps = React.ComponentProps<typeof Sonner>

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = "system" } = useTheme()

  return (
    <Sonner
      theme={theme as ToasterProps["theme"]}
      className="toaster group"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-white group-[.toaster]:text-text-primary-dark group-[.toaster]:border-black/5 group-[.toaster]:shadow-lg dark:group-[.toaster]:bg-bg-off-black dark:group-[.toaster]:text-text-primary-light dark:group-[.toaster]:border-white/5",
          description: "group-[.toast]:text-text-secondary",
          actionButton:
            "group-[.toast]:bg-black group-[.toast]:text-white dark:group-[.toast]:bg-white dark:group-[.toast]:text-black",
          cancelButton:
            "group-[.toast]:bg-bg-light group-[.toast]:text-text-secondary dark:group-[.toast]:bg-white/5",
          success:
            "group-[.toaster]:!bg-green-50 group-[.toaster]:!text-green-900 group-[.toaster]:!border-green-200 dark:group-[.toaster]:!bg-green-900/20 dark:group-[.toaster]:!text-green-400 dark:group-[.toaster]:!border-green-800",
          error:
            "group-[.toaster]:!bg-red-50 group-[.toaster]:!text-red-900 group-[.toaster]:!border-red-200 dark:group-[.toaster]:!bg-red-900/20 dark:group-[.toaster]:!text-red-400 dark:group-[.toaster]:!border-red-800",
          warning:
            "group-[.toaster]:!bg-yellow-50 group-[.toaster]:!text-yellow-900 group-[.toaster]:!border-yellow-200 dark:group-[.toaster]:!bg-yellow-900/20 dark:group-[.toaster]:!text-yellow-400 dark:group-[.toaster]:!border-yellow-800",
          info:
            "group-[.toaster]:!bg-blue-50 group-[.toaster]:!text-blue-900 group-[.toaster]:!border-blue-200 dark:group-[.toaster]:!bg-blue-900/20 dark:group-[.toaster]:!text-blue-400 dark:group-[.toaster]:!border-blue-800",
        },
      }}
      {...props}
    />
  )
}

export { Toaster }
