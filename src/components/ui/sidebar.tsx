import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { ChevronLeft, ChevronRight, Menu } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface SidebarContextProps {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  fixed: boolean
  setFixed: React.Dispatch<React.SetStateAction<boolean>>
}

const SidebarContext = React.createContext<SidebarContextProps | undefined>(
  undefined
)

function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }

  return context
}

interface SidebarProviderProps {
  defaultOpen?: boolean
  defaultFixed?: boolean
  children: React.ReactNode
}

function SidebarProvider({
  defaultOpen = true,
  defaultFixed = false,
  children,
}: SidebarProviderProps) {
  const [open, setOpen] = React.useState(defaultOpen)
  const [fixed, setFixed] = React.useState(defaultFixed)
  const value = React.useMemo(
    () => ({ open, setOpen, fixed, setFixed }),
    [open, setOpen, fixed, setFixed]
  )

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  )
}

const Sidebar = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { open } = useSidebar()

  return (
    <div
      data-state={open ? "open" : "closed"}
      className={cn(
        "h-full flex-none overflow-y-auto border-r bg-background data-[state=closed]:w-[70px] data-[state=open]:w-[250px] transition-[width]",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Sidebar.displayName = "Sidebar"

const SidebarHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex h-12 items-center justify-start px-4", className)}
      {...props}
    >
      {children}
    </div>
  )
})
SidebarHeader.displayName = "SidebarHeader"

const SidebarContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex-1 overflow-y-auto", className)}
      {...props}
    />
  )
})
SidebarContent.displayName = "SidebarContent"

const SidebarFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("border-t bg-background p-2", className)}
      {...props}
    />
  )
})
SidebarFooter.displayName = "SidebarFooter"

const SidebarGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    sections?: React.ReactNode
  }
>(({ className, sections, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-2 p-2", className)}
      {...props}
    >
      {children}
      {sections}
    </div>
  )
})
SidebarGroup.displayName = "SidebarGroup"

interface SidebarGroupLabelProps extends React.HTMLAttributes<HTMLDivElement> {
  canResize?: boolean
}

const SidebarGroupLabel = React.forwardRef<
  HTMLDivElement,
  SidebarGroupLabelProps
>(({ className, canResize = true, children, ...props }, ref) => {
  const { open } = useSidebar()
  const isHidden = canResize && !open

  return isHidden ? null : (
    <div
      ref={ref}
      className={cn(
        "px-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground [&:not(:first-child)]:mt-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
})
SidebarGroupLabel.displayName = "SidebarGroupLabel"

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-0.5", className)}
      {...props}
    />
  )
})
SidebarGroupContent.displayName = "SidebarGroupContent"

const SidebarMenu = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => {
  return (
    <ul
      ref={ref}
      className={cn("-mx-2 flex flex-col gap-0.5", className)}
      {...props}
    />
  )
})
SidebarMenu.displayName = "SidebarMenu"

const SidebarMenuItem = React.forwardRef<
  HTMLLIElement,
  React.HTMLAttributes<HTMLLIElement>
>(({ className, ...props }, ref) => {
  return (
    <li
      ref={ref}
      className={cn("flex flex-1 flex-col text-sm", className)}
      {...props}
    />
  )
})
SidebarMenuItem.displayName = "SidebarMenuItem"

const sidebarMenuButtonVariants = cva("flex items-center gap-2 p-2", {
  variants: {
    variant: {
      default: "hover:bg-accent",
      outline:
        "border-border bg-transparent hover:bg-accent hover:text-accent-foreground",
    },
    size: {
      default: "h-10",
      sm: "h-9",
      lg: "h-11",
    },
    isSelected: {
      true: "bg-accent font-medium",
      false: "font-normal",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
    isSelected: false,
  },
})

interface SidebarMenuButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof sidebarMenuButtonVariants> {
  asChild?: boolean
}

const SidebarMenuButton = React.forwardRef<
  HTMLButtonElement,
  SidebarMenuButtonProps
>(({ className, variant, size, isSelected, ...props }, ref) => {
  const { open } = useSidebar()

  return (
    <button
      ref={ref}
      className={cn(
        sidebarMenuButtonVariants({ variant, size, isSelected }),
        "w-full px-2 data-[state=closed]:px-0 data-[state=closed]:py-0 data-[state=closed]:hover:bg-transparent",
        open ? "rounded-md px-2" : "h-8 w-8 justify-center rounded-full",
        className
      )}
      data-state={open ? "open" : "closed"}
      {...props}
    />
  )
})
SidebarMenuButton.displayName = "SidebarMenuButton"

interface SidebarTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "default" | "outline";
  size?: "default" | "sm" | "lg";
  className?: string;
}

function SidebarTrigger({
  className,
  children,
  variant = "outline",
  size = "default",
  ...props
}: SidebarTriggerProps) {
  const { open, setOpen } = useSidebar()

  return (
    <Button
      variant={variant}
      size={size}
      className={cn("shrink-0", className)}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children ? children : open ? <ChevronLeft /> : <ChevronRight />}
      <span className="sr-only">{open ? "Close" : "Open"} Sidebar</span>
    </Button>
  )
}

function SidebarCollapseButton({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, setOpen, fixed } = useSidebar()

  if (fixed) {
    return null
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn(
        "absolute -right-3 top-2 z-10 h-6 w-6 rotate-180 rounded-full bg-background text-muted-foreground transition-all hover:bg-accent hover:text-accent-foreground",
        !open && "rotate-0",
        className
      )}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children ? children : <ChevronRight className="h-3 w-3" />}
      <span className="sr-only">{open ? "Close" : "Open"} Sidebar</span>
    </Button>
  )
}

function SidebarMobileTrigger({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const { open, setOpen } = useSidebar()

  return (
    <Button
      variant="ghost"
      size="icon"
      className={cn("md:hidden", className)}
      onClick={() => setOpen(!open)}
      {...props}
    >
      {children || <Menu />}
      <span className="sr-only">Toggle Sidebar</span>
    </Button>
  )
}

export {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarContext,
  SidebarProvider,
  SidebarCollapseButton,
  SidebarTrigger,
  SidebarMobileTrigger,
  useSidebar,
}
