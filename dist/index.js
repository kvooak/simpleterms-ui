// src/lib/utils.ts
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function getErrorMessage(err, fallback) {
  return err instanceof Error ? err.message : fallback;
}
function toSlug(name) {
  return name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

// src/hooks/use-mobile.ts
import * as React from "react";
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState(void 0);
  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${String(MOBILE_BREAKPOINT - 1)}px)`);
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };
    mql.addEventListener("change", onChange);
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    return () => {
      mql.removeEventListener("change", onChange);
    };
  }, []);
  return isMobile === true;
}

// src/components/badge.tsx
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";
import { jsx } from "react/jsx-runtime";
var badgeVariants = cva(
  "gap-1 rounded-none border border-transparent font-medium [&>svg]:size-3! inline-flex items-center justify-start w-fit whitespace-nowrap shrink-0 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive overflow-hidden group/badge",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
        destructive: "bg-destructive text-white focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
        // Solid variants use fixed faded-Gruvbox fills + cream text — emphatic
        // and legible on either canvas. Soft variants use the flipping --gb-*
        // tint tokens (see index.css) so a single class works in both themes.
        success: "bg-[#79740e] text-[#fbf1c7]",
        warning: "bg-[#b57614] text-[#fbf1c7]",
        info: "bg-[#076678] text-[#fbf1c7]",
        "error-soft": "bg-gb-red/15 text-gb-red",
        "warning-soft": "bg-gb-yellow/15 text-gb-yellow",
        "caution-soft": "bg-gb-orange/15 text-gb-orange",
        "retry-soft": "bg-gb-yellow/15 text-gb-yellow",
        "info-soft": "bg-gb-blue/15 text-gb-blue",
        "success-soft": "bg-gb-green/15 text-gb-green",
        "purple-soft": "bg-gb-purple/15 text-gb-purple"
      },
      size: {
        default: "text-base px-2 py-0.5",
        sm: "text-sm px-1.5 py-0.5",
        xs: "text-sm px-1 py-0"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function Badge({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      "data-variant": variant,
      className: cn(badgeVariants({ variant, size }), className),
      ...props
    }
  );
}

// src/components/button.tsx
import { cva as cva2 } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { Slot as Slot2 } from "radix-ui";
import { Fragment, jsx as jsx2, jsxs } from "react/jsx-runtime";
var buttonVariants = cva2(
  "focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 rounded-none border border-transparent bg-clip-padding text-sm font-medium transition-colors focus-visible:ring-1 aria-invalid:ring-1 [&_svg:not([class*='size-'])]:size-4 inline-flex items-center justify-center whitespace-nowrap disabled:pointer-events-none disabled:opacity-70 [&_svg]:pointer-events-none shrink-0 [&_svg]:shrink-0 outline-none group/button select-none",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
        outline: "border-border bg-background hover:bg-muted hover:text-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50 aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive: "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 gap-1.5 px-2.5 py-1 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
        xs: "h-9 gap-1 px-2.5 py-0.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-10 gap-1.5 px-2.5 py-1 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        icon: "size-10",
        "icon-xs": "size-9 [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-10",
        "icon-lg": "size-11"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "sm"
    }
  }
);
function Button({
  ref,
  className,
  variant = "default",
  size = "sm",
  asChild = false,
  isLoading = false,
  disabled,
  children,
  ...props
}) {
  const Comp = asChild ? Slot2.Root : "button";
  return /* @__PURE__ */ jsx2(
    Comp,
    {
      ref,
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      disabled: disabled === true || isLoading,
      "aria-busy": isLoading,
      className: cn(buttonVariants({ variant, size, className })),
      ...props,
      children: isLoading ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx2(Loader2, { className: "size-4 animate-spin", "aria-hidden": "true" }),
        children
      ] }) : children
    }
  );
}
function ActionButton({
  ref,
  destructive = false,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx2(
    Button,
    {
      ref,
      variant: destructive ? "destructive" : "default",
      className: cn("font-semibold", className),
      ...props
    }
  );
}
function StandardButton({ ref, disabled, className, ...props }) {
  return /* @__PURE__ */ jsx2(
    Button,
    {
      ref,
      variant: "outline",
      disabled,
      "aria-disabled": disabled === true ? true : void 0,
      className: cn(disabled === true && "text-muted-foreground", className),
      ...props
    }
  );
}
function IconButton({ ref, size = "icon-sm", className, ...props }) {
  return /* @__PURE__ */ jsx2(Button, { ref, variant: "ghost", size, className: cn("text-muted-foreground", className), ...props });
}
var rowButtonVariants = cva2(
  "w-full text-left transition-colors outline-none focus-visible:ring-1 focus-visible:ring-ring/50 disabled:pointer-events-none",
  {
    variants: {
      // size is declared before variant so tile's own p-3 outranks the
      // size padding in tailwind-merge order (later class wins).
      size: {
        sm: "px-2 py-1.5",
        md: "px-3 py-2",
        lg: "px-4 py-3"
      },
      variant: {
        /** Plain list row: subtle hover background. */
        row: "hover:bg-muted/40",
        /** Dropdown / combobox option. */
        option: "text-sm hover:bg-accent",
        /** Bordered settings tile / card. Carries its own p-3; size is moot. */
        tile: "border border-border bg-muted/20 p-3 hover:bg-muted/40",
        /** No hover chrome — for rows whose hover styling is group-driven. */
        bare: ""
      }
    },
    defaultVariants: { variant: "row", size: "md" }
  }
);
function RowButton({ ref, className, variant, size, type = "button", ...props }) {
  return /* @__PURE__ */ jsx2("button", { ref, type, className: cn(rowButtonVariants({ variant, size }), className), ...props });
}
function LinkButton({ ref, className, type = "button", ...props }) {
  return /* @__PURE__ */ jsx2("button", { ref, type, className: cn("text-left hover:underline", className), ...props });
}

// src/components/checkbox.tsx
import { CheckIcon, MinusIcon } from "lucide-react";
import { Checkbox as CheckboxPrimitive } from "radix-ui";
import { jsx as jsx3 } from "react/jsx-runtime";
function Checkbox({ className, checked, ...props }) {
  return /* @__PURE__ */ jsx3(
    CheckboxPrimitive.Root,
    {
      "data-slot": "checkbox",
      checked,
      className: cn(
        "border-input dark:bg-input/30 data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary data-checked:border-primary data-indeterminate:bg-primary data-indeterminate:text-primary-foreground data-indeterminate:border-primary aria-invalid:aria-checked:border-primary aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 flex size-4.5 items-center justify-center rounded-none border group-has-disabled/field:opacity-50 focus-visible:ring-1 aria-invalid:ring-1 peer relative shrink-0 outline-none after:absolute after:-inset-x-3 after:-inset-y-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx3(
        CheckboxPrimitive.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "[&>svg]:size-4 grid place-content-center text-current transition-none",
          children: checked === "indeterminate" ? /* @__PURE__ */ jsx3(MinusIcon, {}) : /* @__PURE__ */ jsx3(CheckIcon, {})
        }
      )
    }
  );
}

// src/components/chip-input.tsx
import { XIcon } from "lucide-react";
import * as React2 from "react";
import { jsx as jsx4, jsxs as jsxs2 } from "react/jsx-runtime";
function ChipInput({
  values,
  onChange,
  placeholder,
  disabled = false,
  className,
  inputAriaLabel
}) {
  const [draft, setDraft] = React2.useState("");
  const commit = (raw) => {
    const tokens = raw.split(/[\n,]/).map((t) => t.trim()).filter((t) => t !== "");
    if (tokens.length === 0) return;
    const next = [...values];
    for (const token of tokens) {
      if (!next.includes(token)) next.push(token);
    }
    onChange(next);
    setDraft("");
  };
  const removeAt = (index) => {
    onChange(values.filter((_, i) => i !== index));
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      commit(draft);
    } else if (e.key === "Backspace" && draft === "" && values.length > 0) {
      removeAt(values.length - 1);
    }
  };
  return /* @__PURE__ */ jsxs2(
    "div",
    {
      className: cn(
        "border-border bg-white dark:bg-input/30 flex min-h-10 w-full flex-wrap items-center gap-1.5 rounded-none border px-2 py-1.5 focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-1",
        disabled && "pointer-events-none cursor-not-allowed opacity-50",
        className
      ),
      children: [
        values.map((value, index) => /* @__PURE__ */ jsxs2(
          "span",
          {
            className: "bg-secondary text-secondary-foreground inline-flex items-center gap-1 rounded-none px-1.5 py-0.5 text-sm font-medium",
            children: [
              /* @__PURE__ */ jsx4("span", { className: "break-all", children: value }),
              /* @__PURE__ */ jsx4(
                "button",
                {
                  type: "button",
                  disabled,
                  onClick: () => {
                    removeAt(index);
                  },
                  className: "text-muted-foreground hover:text-foreground shrink-0",
                  "aria-label": `Remove ${value}`,
                  children: /* @__PURE__ */ jsx4(XIcon, { className: "size-3" })
                }
              )
            ]
          },
          value
        )),
        /* @__PURE__ */ jsx4(
          "input",
          {
            type: "text",
            value: draft,
            disabled,
            "aria-label": inputAriaLabel,
            onChange: (e) => {
              setDraft(e.target.value);
            },
            onKeyDown: handleKeyDown,
            onBlur: () => {
              commit(draft);
            },
            placeholder: values.length === 0 ? placeholder : void 0,
            className: "placeholder:text-muted-foreground flex-1 bg-transparent text-base outline-none min-w-[8rem]"
          }
        )
      ]
    }
  );
}

// src/components/collapsible.tsx
import { ChevronRight } from "lucide-react";
import { Collapsible as CollapsiblePrimitive } from "radix-ui";
import { jsx as jsx5, jsxs as jsxs3 } from "react/jsx-runtime";
function CollapsibleSection({
  title,
  trailing,
  open,
  onOpenChange,
  defaultOpen = false,
  triggerClassName,
  contentClassName,
  className,
  children
}) {
  return /* @__PURE__ */ jsxs3(
    CollapsiblePrimitive.Root,
    {
      open,
      onOpenChange,
      defaultOpen,
      className: cn("group/collapsible", className),
      children: [
        /* @__PURE__ */ jsx5(CollapsiblePrimitive.CollapsibleTrigger, { asChild: true, children: /* @__PURE__ */ jsxs3(
          "div",
          {
            role: "button",
            tabIndex: 0,
            className: cn(
              "flex items-center gap-1.5 w-full text-left",
              "cursor-pointer hover:bg-muted/50 transition-colors",
              "px-3 py-2",
              triggerClassName
            ),
            children: [
              /* @__PURE__ */ jsx5(
                ChevronRight,
                {
                  className: cn(
                    "size-3.5 text-muted-foreground shrink-0",
                    "transition-transform duration-150",
                    "group-data-[state=open]/collapsible:rotate-90"
                  ),
                  "aria-hidden": "true"
                }
              ),
              /* @__PURE__ */ jsx5("span", { className: "text-base font-medium flex-1", children: title }),
              trailing !== void 0 && /* @__PURE__ */ jsx5("span", { className: "shrink-0", children: trailing })
            ]
          }
        ) }),
        /* @__PURE__ */ jsx5(CollapsiblePrimitive.CollapsibleContent, { className: contentClassName, children })
      ]
    }
  );
}
var Collapsible = CollapsiblePrimitive.Root;
var CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger;
var CollapsibleContent = CollapsiblePrimitive.CollapsibleContent;

// src/components/dialog.tsx
import { XIcon as XIcon2 } from "lucide-react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { jsx as jsx6, jsxs as jsxs4 } from "react/jsx-runtime";
function Dialog({ ...props }) {
  return /* @__PURE__ */ jsx6(DialogPrimitive.Root, { "data-slot": "dialog", ...props });
}
function DialogTrigger({ ...props }) {
  return /* @__PURE__ */ jsx6(DialogPrimitive.Trigger, { "data-slot": "dialog-trigger", ...props });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ jsx6(DialogPrimitive.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogClose({ ...props }) {
  return /* @__PURE__ */ jsx6(DialogPrimitive.Close, { "data-slot": "dialog-close", ...props });
}
function DialogOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx6(
    DialogPrimitive.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn("bg-black/30 supports-backdrop-filter:backdrop-blur-xs fixed inset-0 isolate z-50", className),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs4(DialogPortal, { children: [
    /* @__PURE__ */ jsx6(DialogOverlay, {}),
    /* @__PURE__ */ jsxs4(
      DialogPrimitive.Content,
      {
        "data-slot": "dialog-content",
        "aria-describedby": void 0,
        className: cn(
          "bg-popover grid max-w-[calc(100%-2rem)] gap-4 rounded-none p-4 text-base/relaxed border border-border shadow-none sm:max-w-md fixed top-1/2 left-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsx6(DialogPrimitive.Close, { "data-slot": "dialog-close", asChild: true, children: /* @__PURE__ */ jsxs4(IconButton, { className: "absolute top-2 right-2", children: [
            /* @__PURE__ */ jsx6(XIcon2, {}),
            /* @__PURE__ */ jsx6("span", { className: "sr-only", children: "Close" })
          ] }) })
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx6(
    "div",
    {
      "data-slot": "dialog-header",
      className: cn(
        "gap-1 text-left flex flex-col border-b border-border pb-3 bg-surface-dialog-header -mx-4 -mt-4 px-4 pt-4",
        className
      ),
      ...props
    }
  );
}
function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs4(
    "div",
    {
      "data-slot": "dialog-footer",
      className: cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end border-t border-border pt-3 -mx-4 -mb-4 px-4 pb-4 bg-surface-dialog-header",
        className
      ),
      ...props,
      children: [
        children,
        showCloseButton && /* @__PURE__ */ jsx6(DialogPrimitive.Close, { asChild: true, children: /* @__PURE__ */ jsx6(StandardButton, { children: "Close" }) })
      ]
    }
  );
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx6(
    DialogPrimitive.Title,
    {
      "data-slot": "dialog-title",
      className: cn("text-base font-semibold", className),
      ...props
    }
  );
}
function DialogDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx6(
    DialogPrimitive.Description,
    {
      "data-slot": "dialog-description",
      className: cn(
        "text-muted-foreground *:[a]:hover:text-foreground text-sm/relaxed *:[a]:underline *:[a]:underline-offset-3",
        className
      ),
      ...props
    }
  );
}

// src/components/dropdown-menu.tsx
import { DropdownMenu as DropdownMenuPrimitive } from "radix-ui";
import { jsx as jsx7 } from "react/jsx-runtime";
function DropdownMenu({ ...props }) {
  return /* @__PURE__ */ jsx7(DropdownMenuPrimitive.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({ ...props }) {
  return /* @__PURE__ */ jsx7(DropdownMenuPrimitive.Trigger, { "data-slot": "dropdown-menu-trigger", ...props });
}
function DropdownMenuContent({
  className,
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx7(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx7(
    DropdownMenuPrimitive.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-none p-1 border border-border shadow-none origin-(--radix-dropdown-menu-content-transform-origin)",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx7(
    DropdownMenuPrimitive.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-variant": variant,
      className: cn(
        "relative flex cursor-default select-none items-center gap-2 rounded-none px-2 py-2 text-base outline-hidden focus:bg-primary focus:text-primary-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive",
        inset === true && "pl-8",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx7(
    DropdownMenuPrimitive.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("bg-border -mx-1 my-1 h-px", className),
      ...props
    }
  );
}
function DropdownMenuLabel({ className, ...props }) {
  return /* @__PURE__ */ jsx7(
    DropdownMenuPrimitive.Label,
    {
      "data-slot": "dropdown-menu-label",
      className: cn("px-2 py-1.5 text-sm font-semibold text-muted-foreground", className),
      ...props
    }
  );
}
function DropdownMenuGroup({ ...props }) {
  return /* @__PURE__ */ jsx7(DropdownMenuPrimitive.Group, { "data-slot": "dropdown-menu-group", ...props });
}

// src/components/empty-state.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
function EmptyState({ children, className }) {
  return /* @__PURE__ */ jsx8("div", { className: cn("text-center py-16", className), children: /* @__PURE__ */ jsx8("p", { className: "text-muted-foreground", children }) });
}

// src/components/label.tsx
import { Label as LabelPrimitive } from "radix-ui";
import { jsx as jsx9 } from "react/jsx-runtime";
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx9(
    LabelPrimitive.Root,
    {
      "data-slot": "label",
      className: cn(
        "gap-2 text-base font-medium leading-none group-data-[disabled=true]:opacity-50 peer-disabled:opacity-50 flex items-center select-none group-data-[disabled=true]:pointer-events-none peer-disabled:cursor-not-allowed",
        className
      ),
      ...props
    }
  );
}

// src/components/field.tsx
import { jsx as jsx10, jsxs as jsxs5 } from "react/jsx-runtime";
function Field({ label, htmlFor, hint, error, className, labelClassName, children }) {
  return /* @__PURE__ */ jsxs5("div", { className: cn("space-y-1", className), children: [
    /* @__PURE__ */ jsx10(Label, { htmlFor, className: cn("text-sm font-medium", labelClassName), children: label }),
    children,
    error !== void 0 && /* @__PURE__ */ jsx10("p", { className: "text-sm text-destructive", children: error }),
    error === void 0 && hint !== void 0 && /* @__PURE__ */ jsx10("p", { className: "text-sm text-muted-foreground", children: hint })
  ] });
}

// src/components/info-popover.tsx
import { Info } from "lucide-react";

// src/components/popover.tsx
import { Popover as PopoverPrimitive } from "radix-ui";
import { jsx as jsx11 } from "react/jsx-runtime";
function Popover({ ...props }) {
  return /* @__PURE__ */ jsx11(PopoverPrimitive.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({ ...props }) {
  return /* @__PURE__ */ jsx11(PopoverPrimitive.Trigger, { "data-slot": "popover-trigger", ...props });
}
function PopoverAnchor({ ...props }) {
  return /* @__PURE__ */ jsx11(PopoverPrimitive.Anchor, { "data-slot": "popover-anchor", ...props });
}
function PopoverContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx11(PopoverPrimitive.Portal, { children: /* @__PURE__ */ jsx11(
    PopoverPrimitive.Content,
    {
      "data-slot": "popover-content",
      align,
      sideOffset,
      className: cn(
        "bg-popover text-popover-foreground z-50 rounded-none p-4 text-base/relaxed border border-border shadow-none origin-(--radix-popover-content-transform-origin)",
        className
      ),
      ...props
    }
  ) });
}
function PopoverClose({ ...props }) {
  return /* @__PURE__ */ jsx11(PopoverPrimitive.Close, { "data-slot": "popover-close", ...props });
}

// src/components/info-popover.tsx
import { jsx as jsx12, jsxs as jsxs6 } from "react/jsx-runtime";
function InfoPopover({ children, label = "Info", align = "end", className }) {
  return /* @__PURE__ */ jsxs6(Popover, { children: [
    /* @__PURE__ */ jsx12(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsx12(IconButton, { title: label, "aria-label": label, children: /* @__PURE__ */ jsx12(Info, { className: "size-4" }) }) }),
    /* @__PURE__ */ jsx12(PopoverContent, { align, className: cn("w-80", className), children })
  ] });
}

// src/components/input.tsx
import { jsx as jsx13 } from "react/jsx-runtime";
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx13(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "dark:bg-input/30 border-border bg-white focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 h-10 rounded-none border px-2.5 py-1.5 text-base focus-visible:ring-1 aria-invalid:ring-1 placeholder:text-muted-foreground w-full min-w-0 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 file:h-8 file:text-sm file:font-medium file:text-foreground file:inline-flex file:items-center file:rounded file:border-0 file:bg-muted file:px-2.5 file:mr-3 file:cursor-pointer",
        className
      ),
      ...props
    }
  );
}

// src/components/log-board.tsx
import { Fragment as Fragment2, useState as useState3 } from "react";

// src/components/pagination.tsx
import { jsx as jsx14, jsxs as jsxs7 } from "react/jsx-runtime";
function Pagination({
  page,
  totalPages,
  total,
  onPageChange,
  showNumbers = true,
  className
}) {
  if (totalPages <= 1) return null;
  return /* @__PURE__ */ jsxs7(
    "nav",
    {
      className: cn("flex items-center justify-center gap-3 py-2 border-t border-border flex-shrink-0", className),
      "aria-label": "Pagination",
      children: [
        /* @__PURE__ */ jsx14(
          StandardButton,
          {
            size: "sm",
            onClick: () => {
              onPageChange(page - 1);
            },
            disabled: page === 0,
            "aria-label": "Previous page",
            children: "Prev"
          }
        ),
        showNumbers && /* @__PURE__ */ jsxs7("span", { className: "text-sm text-muted-foreground tabular-nums", children: [
          page + 1,
          " / ",
          totalPages,
          " (",
          total,
          ")"
        ] }),
        /* @__PURE__ */ jsx14(
          StandardButton,
          {
            size: "sm",
            onClick: () => {
              onPageChange(page + 1);
            },
            disabled: page >= totalPages - 1,
            "aria-label": "Next page",
            children: "Next"
          }
        )
      ]
    }
  );
}

// src/components/log-board.tsx
import { Fragment as Fragment3, jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
function LogBoard({
  columns,
  rows,
  rowKey,
  renderRow,
  isLoading = false,
  loadingMessage = "Loading...",
  emptyMessage = "Nothing recorded yet.",
  paging,
  tableClassName
}) {
  const [expandedKey, setExpandedKey] = useState3(null);
  if (isLoading) {
    return /* @__PURE__ */ jsx15("div", { className: "text-sm text-muted-foreground py-8 text-center", children: loadingMessage });
  }
  if (rows.length === 0) {
    return /* @__PURE__ */ jsx15("div", { className: "text-sm text-muted-foreground py-8 text-center", children: emptyMessage });
  }
  return /* @__PURE__ */ jsxs8(Fragment3, { children: [
    /* @__PURE__ */ jsx15("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs8("table", { className: cn("w-full text-left", tableClassName), children: [
      /* @__PURE__ */ jsx15("thead", { children: /* @__PURE__ */ jsx15("tr", { className: "border-b border-border", children: columns.map((col) => /* @__PURE__ */ jsx15(
        "th",
        {
          className: cn(
            "px-3 py-2 text-xs font-medium text-muted-foreground uppercase",
            col.align === "right" && "text-right",
            col.className
          ),
          children: col.header ?? col.label ?? ""
        },
        col.key
      )) }) }),
      /* @__PURE__ */ jsx15("tbody", { children: rows.map((row, index) => {
        const key = rowKey(row);
        return /* @__PURE__ */ jsx15(Fragment2, { children: renderRow(row, {
          index,
          expanded: expandedKey === key,
          onToggle: () => {
            setExpandedKey(expandedKey === key ? null : key);
          }
        }) }, key);
      }) })
    ] }) }),
    paging !== void 0 && /* @__PURE__ */ jsx15(
      Pagination,
      {
        page: paging.page,
        totalPages: paging.totalPages,
        total: paging.total,
        onPageChange: paging.onPageChange
      }
    )
  ] });
}

// src/components/metadata-row.tsx
import { jsx as jsx16, jsxs as jsxs9 } from "react/jsx-runtime";
function MetadataRow({ label, children, noBorder = false }) {
  return /* @__PURE__ */ jsxs9("div", { className: cn("flex items-center justify-between py-1.5", !noBorder && "border-b border-border"), children: [
    /* @__PURE__ */ jsx16("span", { className: "text-sm text-muted-foreground", children: label }),
    children
  ] });
}

// src/components/overview-popover.tsx
import { Activity } from "lucide-react";
import { jsx as jsx17, jsxs as jsxs10 } from "react/jsx-runtime";
function OverviewStatRow({ label, value, icon: Icon, accent }) {
  return /* @__PURE__ */ jsxs10("div", { className: "flex items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxs10("span", { className: "flex items-center gap-2 text-sm text-muted-foreground", children: [
      Icon !== void 0 && /* @__PURE__ */ jsx17(Icon, { className: cn("size-3.5 shrink-0", accent) }),
      label
    ] }),
    /* @__PURE__ */ jsx17("span", { className: "text-right text-sm font-semibold leading-tight tabular-nums", children: value })
  ] });
}
function OverviewSection({
  title,
  children
}) {
  return /* @__PURE__ */ jsxs10("div", { className: "space-y-2 border-b border-border p-3 last:border-b-0", children: [
    title !== void 0 && /* @__PURE__ */ jsx17("div", { className: "text-sm uppercase tracking-wide text-muted-foreground", children: title }),
    children
  ] });
}
function OverviewPopover({
  label = "Overview",
  badge,
  icon: Icon = Activity,
  align = "end",
  contentClassName,
  disabled,
  children
}) {
  return /* @__PURE__ */ jsxs10(Popover, { children: [
    /* @__PURE__ */ jsx17(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs10(StandardButton, { size: "xs", disabled, children: [
      /* @__PURE__ */ jsx17(Icon, { className: "size-3" }),
      label,
      badge !== void 0 && /* @__PURE__ */ jsx17("span", { className: "text-muted-foreground tabular-nums", children: badge })
    ] }) }),
    /* @__PURE__ */ jsx17(PopoverContent, { align, className: cn("w-72 p-0", contentClassName), children })
  ] });
}

// src/components/page-header.tsx
import { jsx as jsx18, jsxs as jsxs11 } from "react/jsx-runtime";
function PageHeader({ icon: Icon, title, subtitle, tabs, actions, children }) {
  return /* @__PURE__ */ jsxs11("div", { className: "px-5 py-3 border-b border-border flex-shrink-0 flex items-center gap-3", children: [
    Icon !== void 0 && /* @__PURE__ */ jsx18(Icon, { className: "size-6 text-muted-foreground" }),
    /* @__PURE__ */ jsx18("h1", { className: "text-xl font-semibold", children: title }),
    subtitle !== void 0 && /* @__PURE__ */ jsx18("span", { className: "text-sm text-muted-foreground", children: subtitle }),
    children,
    tabs,
    actions !== void 0 && /* @__PURE__ */ jsx18("div", { className: "ml-auto", children: actions })
  ] });
}

// src/components/page-layout.tsx
import { jsx as jsx19, jsxs as jsxs12 } from "react/jsx-runtime";
function PageLayout({
  icon,
  title,
  subtitle,
  headerActions,
  footer,
  children
}) {
  return /* @__PURE__ */ jsxs12("div", { className: "flex flex-col flex-1 overflow-hidden w-full", children: [
    /* @__PURE__ */ jsx19(PageHeader, { icon, title, subtitle, children: headerActions }),
    /* @__PURE__ */ jsx19("div", { className: "flex-1 overflow-y-auto", children: /* @__PURE__ */ jsx19("div", { className: "px-4 py-3 space-y-4", children }) }),
    footer
  ] });
}

// src/components/panel.tsx
import { jsx as jsx20 } from "react/jsx-runtime";
function Panel({ children, className }) {
  return /* @__PURE__ */ jsx20("div", { className: cn("bg-card border border-border p-4 card-elevated", className), children });
}

// src/components/select.tsx
import { ChevronDownIcon, CheckIcon as CheckIcon2, ChevronUpIcon } from "lucide-react";
import { Select as SelectPrimitive } from "radix-ui";
import { jsx as jsx21, jsxs as jsxs13 } from "react/jsx-runtime";
function Select({ ...props }) {
  return /* @__PURE__ */ jsx21(SelectPrimitive.Root, { "data-slot": "select", ...props });
}
function SelectGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx21(SelectPrimitive.Group, { "data-slot": "select-group", className: cn("scroll-my-1", className), ...props });
}
function SelectValue({ ...props }) {
  return /* @__PURE__ */ jsx21(SelectPrimitive.Value, { "data-slot": "select-value", ...props });
}
function SelectTrigger({
  className,
  showChevron = true,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs13(
    SelectPrimitive.Trigger,
    {
      "data-slot": "select-trigger",
      className: cn(
        "border-border bg-white dark:bg-input/30 data-placeholder:text-muted-foreground dark:hover:bg-input/50 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 gap-1.5 rounded-none border h-10 py-2 pr-2 pl-2.5 text-sm select-none focus-visible:ring-1 aria-invalid:ring-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:gap-1.5 [&_svg:not([class*='size-'])]:size-4 flex w-fit items-center justify-between whitespace-nowrap outline-none disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        children,
        showChevron && /* @__PURE__ */ jsx21(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx21(ChevronDownIcon, { className: "text-muted-foreground size-4 pointer-events-none" }) })
      ]
    }
  );
}
function SelectContent({
  className,
  children,
  position = "popper",
  align = "end",
  sideOffset = 2,
  ...props
}) {
  return /* @__PURE__ */ jsx21(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs13(
    SelectPrimitive.Content,
    {
      "data-slot": "select-content",
      className: cn(
        "bg-popover text-popover-foreground rounded-none shadow-none relative z-50 min-w-[var(--radix-select-trigger-width)] w-max max-w-80 max-h-(--radix-select-content-available-height) origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto",
        "border border-border",
        className
      ),
      position,
      align,
      sideOffset,
      ...props,
      children: [
        /* @__PURE__ */ jsx21(SelectScrollUpButton, {}),
        /* @__PURE__ */ jsx21(SelectPrimitive.Viewport, { className: "data-[position=popper]:w-full data-[position=popper]:min-w-[var(--radix-select-trigger-width)] py-0.5", children }),
        /* @__PURE__ */ jsx21(SelectScrollDownButton, {})
      ]
    }
  ) });
}
function SelectItem({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs13(
    SelectPrimitive.Item,
    {
      "data-slot": "select-item",
      className: cn(
        "focus:bg-primary focus:text-primary-foreground not-data-[variant=destructive]:focus:**:text-primary-foreground gap-2 rounded-none py-1 pr-7 pl-2 text-sm mx-0.5 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2 relative flex w-auto cursor-default items-center outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx21("span", { className: "pointer-events-none absolute right-1.5 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx21(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx21(CheckIcon2, { className: "pointer-events-none size-3" }) }) }),
        /* @__PURE__ */ jsx21(SelectPrimitive.ItemText, { children })
      ]
    }
  );
}
function SelectScrollUpButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx21(
    SelectPrimitive.ScrollUpButton,
    {
      "data-slot": "select-scroll-up-button",
      className: cn(
        "bg-popover z-10 flex cursor-default items-center justify-center py-0.5 border-b border-border [&_svg:not([class*='size-'])]:size-3.5",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx21(ChevronUpIcon, {})
    }
  );
}
function SelectScrollDownButton({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx21(
    SelectPrimitive.ScrollDownButton,
    {
      "data-slot": "select-scroll-down-button",
      className: cn(
        "bg-popover z-10 flex cursor-default items-center justify-center py-0.5 border-t border-border [&_svg:not([class*='size-'])]:size-3.5",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx21(ChevronDownIcon, {})
    }
  );
}
var EMPTY_SENTINEL = "__empty__";
function isGroup(item) {
  return "options" in item;
}
function toInternalValue(v) {
  return v === "" ? EMPTY_SENTINEL : v;
}
function toExternalValue(v) {
  return v === EMPTY_SENTINEL ? "" : v;
}
function renderOption(option) {
  const itemValue = toInternalValue(option.value);
  return /* @__PURE__ */ jsx21(SelectItem, { value: itemValue, className: option.className, children: option.label }, itemValue);
}
function DropdownSelect({
  value,
  onValueChange,
  options,
  placeholder,
  showChevron = true,
  disabled,
  className,
  style,
  contentClassName,
  "aria-label": ariaLabel
}) {
  const internalValue = toInternalValue(value);
  function handleChange(v) {
    const external = toExternalValue(v);
    const match = options.flatMap((item) => isGroup(item) ? item.options : [item]).find((option) => option.value === external);
    if (match !== void 0) onValueChange(match.value);
  }
  return /* @__PURE__ */ jsxs13(Select, { value: internalValue, onValueChange: handleChange, disabled, children: [
    /* @__PURE__ */ jsx21(SelectTrigger, { showChevron, className, style, "aria-label": ariaLabel, children: /* @__PURE__ */ jsx21(SelectValue, { placeholder }) }),
    /* @__PURE__ */ jsx21(SelectContent, { className: contentClassName, children: options.map((item, index) => {
      if (isGroup(item)) {
        return /* @__PURE__ */ jsx21(SelectGroup, { children: item.options.map(renderOption) }, item.label !== "" ? item.label : String(index));
      }
      return renderOption(item);
    }) })
  ] });
}

// src/components/separator.tsx
import { Separator as SeparatorPrimitive } from "radix-ui";
import { jsx as jsx22 } from "react/jsx-runtime";
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx22(
    SeparatorPrimitive.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-px data-[orientation=vertical]:self-stretch",
        className
      ),
      ...props
    }
  );
}

// src/components/sheet.tsx
import { XIcon as XIcon3 } from "lucide-react";
import { Dialog as SheetPrimitive } from "radix-ui";
import { jsx as jsx23, jsxs as jsxs14 } from "react/jsx-runtime";
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx23(SheetPrimitive.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({ ...props }) {
  return /* @__PURE__ */ jsx23(SheetPrimitive.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetClose({ ...props }) {
  return /* @__PURE__ */ jsx23(SheetPrimitive.Close, { "data-slot": "sheet-close", ...props });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ jsx23(SheetPrimitive.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx23(
    SheetPrimitive.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn("fixed inset-0 z-50 bg-black/50", className),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs14(SheetPortal, { children: [
    /* @__PURE__ */ jsx23(SheetOverlay, {}),
    /* @__PURE__ */ jsxs14(
      SheetPrimitive.Content,
      {
        "data-slot": "sheet-content",
        className: cn(
          "bg-background fixed z-50 flex flex-col gap-4",
          side === "right" && "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
          side === "left" && "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          side === "top" && "inset-x-0 top-0 h-auto border-b",
          side === "bottom" && "inset-x-0 bottom-0 h-auto border-t",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsxs14(SheetPrimitive.Close, { className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none", children: [
            /* @__PURE__ */ jsx23(XIcon3, { className: "size-4" }),
            /* @__PURE__ */ jsx23("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx23("div", { "data-slot": "sheet-header", className: cn("flex flex-col gap-1.5 p-4", className), ...props });
}
function SheetFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx23("div", { "data-slot": "sheet-footer", className: cn("mt-auto flex flex-col gap-2 p-4", className), ...props });
}
function SheetTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx23(
    SheetPrimitive.Title,
    {
      "data-slot": "sheet-title",
      className: cn("text-foreground font-semibold", className),
      ...props
    }
  );
}
function SheetDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx23(
    SheetPrimitive.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-muted-foreground text-sm", className),
      ...props
    }
  );
}

// src/components/sidebar.tsx
import { cva as cva3 } from "class-variance-authority";
import { PanelLeftIcon } from "lucide-react";
import { Slot as Slot3 } from "radix-ui";
import * as React3 from "react";

// src/components/skeleton.tsx
import { jsx as jsx24 } from "react/jsx-runtime";
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx24("div", { "data-slot": "skeleton", className: cn("bg-accent animate-pulse rounded-md", className), ...props });
}

// src/components/tooltip.tsx
import { Tooltip as TooltipPrimitive } from "radix-ui";
import { jsx as jsx25, jsxs as jsxs15 } from "react/jsx-runtime";
function TooltipProvider({ delayDuration = 0, ...props }) {
  return /* @__PURE__ */ jsx25(TooltipPrimitive.Provider, { "data-slot": "tooltip-provider", delayDuration, ...props });
}
function Tooltip({ ...props }) {
  return /* @__PURE__ */ jsx25(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props });
}
function TooltipTrigger({ ...props }) {
  return /* @__PURE__ */ jsx25(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx25(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs15(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "bg-foreground text-background z-50 w-fit origin-(--radix-tooltip-content-transform-origin) rounded-md px-3 py-1.5 text-sm text-balance",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx25(TooltipPrimitive.Arrow, { className: "bg-foreground fill-foreground z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px]" })
      ]
    }
  ) });
}

// src/components/sidebar.tsx
import { jsx as jsx26, jsxs as jsxs16 } from "react/jsx-runtime";
var SIDEBAR_COOKIE_NAME = "sidebar_state";
var SIDEBAR_COOKIE_MAX_AGE = 60 * 60 * 24 * 7;
var SIDEBAR_WIDTH = "16rem";
var SIDEBAR_WIDTH_MOBILE = "18rem";
var SIDEBAR_WIDTH_ICON = "3rem";
var SIDEBAR_KEYBOARD_SHORTCUT = "b";
var SidebarStateContext = React3.createContext(null);
var SidebarActionsContext = React3.createContext(null);
function useSidebarActions() {
  const context = React3.useContext(SidebarActionsContext);
  if (context === null) {
    throw new Error("useSidebarActions must be used within a SidebarProvider.");
  }
  return context;
}
function useSidebar() {
  const state = React3.useContext(SidebarStateContext);
  const actions = React3.useContext(SidebarActionsContext);
  if (state === null || actions === null) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }
  return React3.useMemo(() => ({ ...state, ...actions }), [state, actions]);
}
function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}) {
  const isMobile = useIsMobile();
  const [openMobile, setOpenMobile] = React3.useState(false);
  const [_open, _setOpen] = React3.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React3.useCallback(
    (value) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp !== void 0) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
      document.cookie = `${SIDEBAR_COOKIE_NAME}=${String(openState)}; path=/; max-age=${String(SIDEBAR_COOKIE_MAX_AGE)}`;
    },
    [setOpenProp, open]
  );
  const toggleSidebar = React3.useCallback(() => {
    if (isMobile) {
      setOpenMobile((open2) => !open2);
    } else {
      setOpen((open2) => !open2);
    }
  }, [isMobile, setOpen, setOpenMobile]);
  React3.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === SIDEBAR_KEYBOARD_SHORTCUT && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        toggleSidebar();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [toggleSidebar]);
  const state = open ? "expanded" : "collapsed";
  const stateValue = React3.useMemo(
    () => ({ state, open, isMobile, openMobile }),
    [state, open, isMobile, openMobile]
  );
  const actionsValue = React3.useMemo(
    () => ({ setOpen, setOpenMobile, toggleSidebar }),
    [setOpen, setOpenMobile, toggleSidebar]
  );
  return /* @__PURE__ */ jsx26(SidebarStateContext.Provider, { value: stateValue, children: /* @__PURE__ */ jsx26(SidebarActionsContext.Provider, { value: actionsValue, children: /* @__PURE__ */ jsx26(TooltipProvider, { delayDuration: 0, children: /* @__PURE__ */ jsx26(
    "div",
    {
      "data-slot": "sidebar-wrapper",
      style: {
        "--sidebar-width": SIDEBAR_WIDTH,
        "--sidebar-width-icon": SIDEBAR_WIDTH_ICON,
        ...style
      },
      className: cn(
        "group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full",
        className
      ),
      ...props,
      children
    }
  ) }) }) });
}
function Sidebar({
  side = "left",
  variant = "sidebar",
  collapsible = "offcanvas",
  className,
  children,
  ...props
}) {
  const { isMobile, state, openMobile, setOpenMobile } = useSidebar();
  if (collapsible === "none") {
    return /* @__PURE__ */ jsx26(
      "nav",
      {
        "aria-label": "Main navigation",
        "data-slot": "sidebar",
        className: cn("bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col", className),
        ...props,
        children
      }
    );
  }
  if (isMobile) {
    return /* @__PURE__ */ jsx26(Sheet, { open: openMobile, onOpenChange: setOpenMobile, ...props, children: /* @__PURE__ */ jsxs16(
      SheetContent,
      {
        "data-sidebar": "sidebar",
        "data-slot": "sidebar",
        "data-mobile": "true",
        className: "bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden",
        style: {
          "--sidebar-width": SIDEBAR_WIDTH_MOBILE
        },
        side,
        children: [
          /* @__PURE__ */ jsxs16(SheetHeader, { className: "sr-only", children: [
            /* @__PURE__ */ jsx26(SheetTitle, { children: "Sidebar" }),
            /* @__PURE__ */ jsx26(SheetDescription, { children: "Displays the mobile sidebar." })
          ] }),
          /* @__PURE__ */ jsx26("nav", { "aria-label": "Main navigation", className: "flex h-full w-full flex-col", children })
        ]
      }
    ) });
  }
  return /* @__PURE__ */ jsxs16(
    "div",
    {
      className: "group peer text-sidebar-foreground hidden md:block",
      "data-state": state,
      "data-collapsible": state === "collapsed" ? collapsible : "",
      "data-variant": variant,
      "data-side": side,
      "data-slot": "sidebar",
      children: [
        /* @__PURE__ */ jsx26(
          "div",
          {
            "data-slot": "sidebar-gap",
            className: cn(
              "relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear",
              "group-data-[collapsible=offcanvas]:w-0",
              "group-data-[side=right]:rotate-180",
              variant === "floating" || variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon)"
            )
          }
        ),
        /* @__PURE__ */ jsx26(
          "div",
          {
            "data-slot": "sidebar-container",
            className: cn(
              "fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex",
              side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
              // Adjust the padding for floating and inset variants.
              variant === "floating" || variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]" : "group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l",
              className
            ),
            ...props,
            children: /* @__PURE__ */ jsx26(
              "nav",
              {
                "aria-label": "Main navigation",
                "data-sidebar": "sidebar",
                "data-slot": "sidebar-inner",
                className: "bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border",
                children
              }
            )
          }
        )
      ]
    }
  );
}
function SidebarTrigger({ className, onClick, ...props }) {
  const { toggleSidebar } = useSidebarActions();
  return /* @__PURE__ */ jsxs16(
    IconButton,
    {
      "data-sidebar": "trigger",
      "data-slot": "sidebar-trigger",
      size: "icon",
      className: cn("size-7", className),
      onClick: (event) => {
        onClick?.(event);
        toggleSidebar();
      },
      ...props,
      children: [
        /* @__PURE__ */ jsx26(PanelLeftIcon, {}),
        /* @__PURE__ */ jsx26("span", { className: "sr-only", children: "Toggle Sidebar" })
      ]
    }
  );
}
function SidebarRail({ className, ...props }) {
  const { toggleSidebar } = useSidebarActions();
  return /* @__PURE__ */ jsx26(
    IconButton,
    {
      "data-sidebar": "rail",
      "data-slot": "sidebar-rail",
      "aria-label": "Toggle Sidebar",
      tabIndex: -1,
      onClick: toggleSidebar,
      title: "Toggle Sidebar",
      className: cn(
        "hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex",
        "in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        className
      ),
      ...props
    }
  );
}
function SidebarInset({ className, ...props }) {
  return /* @__PURE__ */ jsx26(
    "main",
    {
      "data-slot": "sidebar-inset",
      className: cn(
        "bg-background relative flex min-w-0 w-full flex-1 flex-col",
        "md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2",
        className
      ),
      ...props
    }
  );
}
function SidebarInput({ className, ...props }) {
  return /* @__PURE__ */ jsx26(
    Input,
    {
      "data-slot": "sidebar-input",
      "data-sidebar": "input",
      className: cn("bg-background h-8 w-full shadow-none", className),
      ...props
    }
  );
}
function SidebarHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx26(
    "div",
    {
      "data-slot": "sidebar-header",
      "data-sidebar": "header",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
}
function SidebarFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx26(
    "div",
    {
      "data-slot": "sidebar-footer",
      "data-sidebar": "footer",
      className: cn("flex flex-col gap-2 p-2", className),
      ...props
    }
  );
}
function SidebarSeparator({ className, ...props }) {
  return /* @__PURE__ */ jsx26(
    Separator,
    {
      "data-slot": "sidebar-separator",
      "data-sidebar": "separator",
      className: cn("bg-sidebar-border mx-0 w-auto", className),
      ...props
    }
  );
}
function SidebarContent({ className, ...props }) {
  return /* @__PURE__ */ jsx26(
    "div",
    {
      "data-slot": "sidebar-content",
      "data-sidebar": "content",
      className: cn(
        "flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto overflow-x-hidden group-data-[collapsible=icon]:overflow-hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx26(
    "div",
    {
      "data-slot": "sidebar-group",
      "data-sidebar": "group",
      className: cn("relative flex w-full min-w-0 flex-col p-2", className),
      ...props
    }
  );
}
function SidebarGroupLabel({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot3.Root : "div";
  return /* @__PURE__ */ jsx26(
    Comp,
    {
      "data-slot": "sidebar-group-label",
      "data-sidebar": "group-label",
      className: cn(
        "text-sidebar-foreground/70 ring-sidebar-ring flex h-8 shrink-0 items-center rounded-md px-2 text-sm font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      ),
      ...props
    }
  );
}
function SidebarGroupAction({
  className,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot3.Root : "button";
  return /* @__PURE__ */ jsx26(
    Comp,
    {
      "data-slot": "sidebar-group-action",
      "data-sidebar": "group-action",
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground absolute top-3.5 right-3 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarGroupContent({ className, ...props }) {
  return /* @__PURE__ */ jsx26(
    "div",
    {
      "data-slot": "sidebar-group-content",
      "data-sidebar": "group-content",
      className: cn("w-full text-sm", className),
      ...props
    }
  );
}
function SidebarMenu({ className, ...props }) {
  return /* @__PURE__ */ jsx26(
    "ul",
    {
      "data-slot": "sidebar-menu",
      "data-sidebar": "menu",
      className: cn("flex w-full min-w-0 flex-col gap-0", className),
      ...props
    }
  );
}
function SidebarMenuItem({ className, ...props }) {
  return /* @__PURE__ */ jsx26(
    "li",
    {
      "data-slot": "sidebar-menu-item",
      "data-sidebar": "menu-item",
      className: cn("group/menu-item relative", className),
      ...props
    }
  );
}
var sidebarMenuButtonVariants = cva3(
  "peer/menu-button flex w-full items-center gap-2 overflow-hidden rounded-md p-2 text-left text-sm outline-hidden ring-sidebar-ring transition-[width,height,padding] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 active:bg-sidebar-accent active:text-sidebar-accent-foreground disabled:pointer-events-none disabled:opacity-50 group-has-data-[sidebar=menu-action]/menu-item:pr-8 aria-disabled:pointer-events-none aria-disabled:opacity-50 data-[active=true]:bg-sidebar-accent data-[active=true]:font-medium data-[active=true]:text-sidebar-accent-foreground data-[state=open]:hover:bg-sidebar-accent data-[state=open]:hover:text-sidebar-accent-foreground group-data-[collapsible=icon]:size-9! group-data-[collapsible=icon]:p-2! group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:[&>span]:hidden [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
        outline: "bg-background shadow-[0_0_0_1px_hsl(var(--sidebar-border))] hover:bg-sidebar-accent hover:text-sidebar-accent-foreground hover:shadow-[0_0_0_1px_hsl(var(--sidebar-accent))]"
      },
      size: {
        default: "h-10 text-sm",
        sm: "h-9 text-sm",
        lg: "h-12 text-sm group-data-[collapsible=icon]:p-0!"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
function SidebarMenuButton({
  asChild = false,
  isActive = false,
  variant = "default",
  size = "default",
  tooltip,
  className,
  ...props
}) {
  const Comp = asChild ? Slot3.Root : "button";
  const { isMobile, state } = useSidebar();
  const button = /* @__PURE__ */ jsx26(
    Comp,
    {
      "data-slot": "sidebar-menu-button",
      "data-sidebar": "menu-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(sidebarMenuButtonVariants({ variant, size }), className),
      ...props
    }
  );
  if (tooltip === void 0 || state !== "collapsed" || isMobile) {
    return button;
  }
  if (typeof tooltip === "string") {
    tooltip = {
      children: tooltip
    };
  }
  return /* @__PURE__ */ jsxs16(Tooltip, { children: [
    /* @__PURE__ */ jsx26(TooltipTrigger, { asChild: true, children: button }),
    /* @__PURE__ */ jsx26(TooltipContent, { side: "right", align: "center", ...tooltip })
  ] });
}
function SidebarMenuAction({
  className,
  asChild = false,
  showOnHover = false,
  ...props
}) {
  const Comp = asChild ? Slot3.Root : "button";
  return /* @__PURE__ */ jsx26(
    Comp,
    {
      "data-slot": "sidebar-menu-action",
      "data-sidebar": "menu-action",
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground peer-hover/menu-button:text-sidebar-accent-foreground absolute top-1.5 right-1 flex aspect-square w-5 items-center justify-center rounded-md p-0 outline-hidden transition-transform focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 md:after:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        showOnHover && "peer-data-[active=true]/menu-button:text-sidebar-accent-foreground group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 md:opacity-0",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuBadge({ className, ...props }) {
  return /* @__PURE__ */ jsx26(
    "div",
    {
      "data-slot": "sidebar-menu-badge",
      "data-sidebar": "menu-badge",
      className: cn(
        "text-sidebar-foreground pointer-events-none absolute right-1 top-1/2 -translate-y-1/2 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-sm font-medium tabular-nums select-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuSkeleton({
  className,
  showIcon = false,
  ...props
}) {
  const width = React3.useMemo(() => {
    return `${String(Math.floor(Math.random() * 40) + 50)}%`;
  }, []);
  return /* @__PURE__ */ jsxs16(
    "div",
    {
      "data-slot": "sidebar-menu-skeleton",
      "data-sidebar": "menu-skeleton",
      className: cn("flex h-8 items-center gap-2 rounded-md px-2", className),
      ...props,
      children: [
        showIcon && /* @__PURE__ */ jsx26(Skeleton, { className: "size-4 rounded-md", "data-sidebar": "menu-skeleton-icon" }),
        /* @__PURE__ */ jsx26(
          Skeleton,
          {
            className: "h-4 max-w-(--skeleton-width) flex-1",
            "data-sidebar": "menu-skeleton-text",
            style: {
              "--skeleton-width": width
            }
          }
        )
      ]
    }
  );
}
function SidebarMenuSub({ className, ...props }) {
  return /* @__PURE__ */ jsx26(
    "ul",
    {
      "data-slot": "sidebar-menu-sub",
      "data-sidebar": "menu-sub",
      className: cn(
        "border-sidebar-border ml-3.5 flex min-w-0 flex-col gap-0.5 border-l pl-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}
function SidebarMenuSubItem({ className, ...props }) {
  return /* @__PURE__ */ jsx26(
    "li",
    {
      "data-slot": "sidebar-menu-sub-item",
      "data-sidebar": "menu-sub-item",
      className: cn("group/menu-sub-item relative", className),
      ...props
    }
  );
}
function SidebarMenuSubButton({
  asChild = false,
  size = "md",
  isActive = false,
  className,
  ...props
}) {
  const Comp = asChild ? Slot3.Root : "a";
  return /* @__PURE__ */ jsx26(
    Comp,
    {
      "data-slot": "sidebar-menu-sub-button",
      "data-sidebar": "menu-sub-button",
      "data-size": size,
      "data-active": isActive,
      className: cn(
        "text-sidebar-foreground ring-sidebar-ring hover:bg-sidebar-accent hover:text-sidebar-accent-foreground active:bg-sidebar-accent active:text-sidebar-accent-foreground [&>svg]:text-sidebar-accent-foreground flex h-8 min-w-0 -translate-x-px items-center gap-2 overflow-hidden rounded-md px-2 outline-hidden focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50 [&>span:last-child]:truncate [&>svg]:size-4 [&>svg]:shrink-0",
        "data-[active=true]:bg-sidebar-accent data-[active=true]:text-sidebar-accent-foreground",
        size === "sm" && "text-sm",
        size === "md" && "text-sm",
        "group-data-[collapsible=icon]:hidden",
        className
      ),
      ...props
    }
  );
}

// src/components/stat-card.tsx
import { jsx as jsx27, jsxs as jsxs17 } from "react/jsx-runtime";
function StatCard({ label, value, sub }) {
  return /* @__PURE__ */ jsxs17("div", { className: "border border-border bg-card px-5 py-4 card-elevated", children: [
    /* @__PURE__ */ jsx27("div", { className: "text-sm text-muted-foreground uppercase tracking-wide", children: label }),
    /* @__PURE__ */ jsx27("div", { className: "text-2xl font-semibold mt-1", children: value }),
    sub !== void 0 && /* @__PURE__ */ jsx27("div", { className: "text-sm text-muted-foreground mt-0.5", children: sub })
  ] });
}

// src/components/switch.tsx
import { Switch as SwitchPrimitive } from "radix-ui";
import { jsx as jsx28 } from "react/jsx-runtime";
function Switch({ className, ...props }) {
  return /* @__PURE__ */ jsx28(
    SwitchPrimitive.Root,
    {
      "data-slot": "switch",
      className: cn(
        "peer data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
        "inline-flex h-5 w-9 shrink-0 items-center border border-transparent",
        "transition-all outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx28(
        SwitchPrimitive.Thumb,
        {
          "data-slot": "switch-thumb",
          className: "bg-background pointer-events-none block size-3.5 ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0.5"
        }
      )
    }
  );
}

// src/components/tab-nav.tsx
import { Link } from "@tanstack/react-router";
import { jsx as jsx29, jsxs as jsxs18 } from "react/jsx-runtime";
var wrapperClasses = cn(
  "bg-muted text-muted-foreground",
  "inline-flex w-fit items-center justify-center",
  "p-0.5 gap-0.5"
);
var baseClasses = cn(
  "inline-flex items-center justify-center gap-1.5",
  "px-3 py-2 h-9 text-sm font-medium whitespace-nowrap",
  "hover:text-foreground",
  "focus-visible:border-ring focus-visible:ring-ring/50",
  "focus-visible:ring-1 outline-none",
  "[&_svg]:pointer-events-none [&_svg]:shrink-0",
  "[&_svg:not([class*='size-'])]:size-3.5"
);
var activeClasses = "bg-background text-foreground";
function TabNav({ items, ariaLabel }) {
  return /* @__PURE__ */ jsx29("nav", { "aria-label": ariaLabel, className: wrapperClasses, children: items.map((item) => /* @__PURE__ */ jsxs18(
    Link,
    {
      to: item.to,
      params: item.params,
      activeOptions: { exact: item.exact !== false },
      activeProps: { className: activeClasses },
      inactiveProps: { className: "" },
      className: baseClasses,
      children: [
        item.label,
        item.children
      ]
    },
    item.to
  )) });
}
function ButtonTabNav({ value, onValueChange, items, ariaLabel }) {
  return /* @__PURE__ */ jsx29("div", { role: "tablist", "aria-label": ariaLabel, className: wrapperClasses, children: items.map((item) => /* @__PURE__ */ jsxs18(
    "button",
    {
      type: "button",
      role: "tab",
      "aria-selected": value === item.value,
      className: cn(baseClasses, value === item.value && activeClasses),
      onClick: () => {
        onValueChange(item.value);
      },
      children: [
        item.icon,
        item.label
      ]
    },
    item.value
  )) });
}

// src/components/table.tsx
import { ArrowDown, ArrowUp, ChevronRight as ChevronRight2, ChevronsUpDown } from "lucide-react";
import { Fragment as Fragment4, jsx as jsx30, jsxs as jsxs19 } from "react/jsx-runtime";
var ALIGN_CLASS = {
  left: "text-left",
  right: "text-right",
  center: "text-center"
};
function Table({
  className,
  wrapperClassName,
  ...props
}) {
  return /* @__PURE__ */ jsx30("div", { "data-slot": "table-wrapper", className: cn("w-full overflow-x-auto", wrapperClassName), children: /* @__PURE__ */ jsx30("table", { "data-slot": "table", className: cn("w-full border-collapse text-sm", className), ...props }) });
}
function TableHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx30("thead", { "data-slot": "table-header", className: cn("[&_tr]:border-b [&_tr]:border-border", className), ...props });
}
function TableBody({ className, ...props }) {
  return /* @__PURE__ */ jsx30("tbody", { "data-slot": "table-body", className: cn("[&_tr:last-child]:border-0", className), ...props });
}
function TableFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx30(
    "tfoot",
    {
      "data-slot": "table-footer",
      className: cn("border-t border-border font-semibold [&_tr]:border-0", className),
      ...props
    }
  );
}
function TableRow({ className, ...props }) {
  return /* @__PURE__ */ jsx30(
    "tr",
    {
      "data-slot": "table-row",
      className: cn("border-b border-border/50 transition-colors hover:bg-muted/40", className),
      ...props
    }
  );
}
function TableHead({
  className,
  align = "left",
  ...props
}) {
  return /* @__PURE__ */ jsx30(
    "th",
    {
      "data-slot": "table-head",
      className: cn(
        "px-3 py-2 font-semibold text-xs uppercase tracking-wider text-muted-foreground whitespace-nowrap",
        ALIGN_CLASS[align],
        className
      ),
      ...props
    }
  );
}
function TableCell({
  className,
  align = "left",
  ...props
}) {
  return /* @__PURE__ */ jsx30("td", { "data-slot": "table-cell", className: cn("px-3 py-2 align-top", ALIGN_CLASS[align], className), ...props });
}
function SortableTableHead({
  label,
  sortKey,
  activeKey,
  direction,
  onSort,
  align = "left",
  className
}) {
  const isActive = activeKey === sortKey;
  return /* @__PURE__ */ jsx30(TableHead, { align, className: cn("p-0", className), children: /* @__PURE__ */ jsxs19(
    "button",
    {
      type: "button",
      onClick: () => {
        onSort(sortKey);
      },
      className: cn(
        "inline-flex w-full items-center gap-1 px-3 py-2 transition-colors hover:text-foreground",
        align === "right" && "flex-row-reverse",
        align === "center" && "justify-center",
        isActive && "text-foreground"
      ),
      children: [
        label,
        isActive ? direction === "asc" ? /* @__PURE__ */ jsx30(ArrowUp, { className: "size-3" }) : /* @__PURE__ */ jsx30(ArrowDown, { className: "size-3" }) : /* @__PURE__ */ jsx30(ChevronsUpDown, { className: "size-3 opacity-40" })
      ]
    }
  ) });
}
function ExpandableRow({
  expanded,
  onToggle,
  colSpan,
  children,
  detail,
  className,
  detailClassName
}) {
  return /* @__PURE__ */ jsxs19(Fragment4, { children: [
    /* @__PURE__ */ jsxs19(TableRow, { className: cn("cursor-pointer", className), "aria-expanded": expanded, onClick: onToggle, children: [
      /* @__PURE__ */ jsx30(TableCell, { className: "w-6 pr-0", children: /* @__PURE__ */ jsx30(
        ChevronRight2,
        {
          className: cn(
            "size-3.5 text-muted-foreground transition-transform",
            expanded && "rotate-90 text-foreground"
          )
        }
      ) }),
      children
    ] }),
    expanded && /* @__PURE__ */ jsx30(TableRow, { className: cn("bg-muted/30 hover:bg-muted/30", detailClassName), children: /* @__PURE__ */ jsx30(TableCell, { colSpan, children: detail }) })
  ] });
}

// src/components/tabs.tsx
import { Tabs as TabsPrimitive } from "radix-ui";
import { jsx as jsx31 } from "react/jsx-runtime";
function Tabs({ className, ...props }) {
  return /* @__PURE__ */ jsx31(TabsPrimitive.Root, { "data-slot": "tabs", className, ...props });
}
function TabsList({ className, ...props }) {
  return /* @__PURE__ */ jsx31(
    TabsPrimitive.List,
    {
      "data-slot": "tabs-list",
      className: cn(
        "bg-muted text-muted-foreground inline-flex w-fit items-center justify-center p-0.5 gap-0.5",
        className
      ),
      ...props
    }
  );
}
function TabsTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx31(
    TabsPrimitive.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "inline-flex items-center justify-center gap-1.5 px-3 py-2 h-9 text-sm font-medium whitespace-nowrap transition-colors",
        "hover:text-foreground",
        "data-[state=active]:bg-background data-[state=active]:text-foreground",
        "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-1 outline-none",
        "disabled:pointer-events-none disabled:opacity-50",
        "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-3.5",
        className
      ),
      ...props
    }
  );
}
function TabsContent({ className, ...props }) {
  return /* @__PURE__ */ jsx31(TabsPrimitive.Content, { "data-slot": "tabs-content", className: cn("flex-1 outline-none", className), ...props });
}

// src/components/textarea.tsx
import { jsx as jsx32 } from "react/jsx-runtime";
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx32(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-border bg-white dark:bg-input/30 focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:aria-invalid:border-destructive/50 disabled:bg-input/50 dark:disabled:bg-input/80 rounded-none border px-2.5 py-2 text-base focus-visible:ring-1 aria-invalid:ring-1 placeholder:text-muted-foreground flex field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
export {
  ActionButton,
  Badge,
  ButtonTabNav,
  Checkbox,
  ChipInput,
  Collapsible,
  CollapsibleContent,
  CollapsibleSection,
  CollapsibleTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownSelect,
  EmptyState,
  ExpandableRow,
  Field,
  IconButton,
  InfoPopover,
  Input,
  Label,
  LinkButton,
  LogBoard,
  MetadataRow,
  OverviewPopover,
  OverviewSection,
  OverviewStatRow,
  PageHeader,
  PageLayout,
  Pagination,
  Panel,
  Popover,
  PopoverAnchor,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  RowButton,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupAction,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSkeleton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
  Skeleton,
  SortableTableHead,
  StandardButton,
  StatCard,
  Switch,
  TabNav,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Textarea,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  cn,
  getErrorMessage,
  toSlug,
  useIsMobile,
  useSidebar,
  useSidebarActions
};
//# sourceMappingURL=index.js.map