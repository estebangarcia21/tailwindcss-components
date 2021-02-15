import React from "react"
import { Primitive, primitives } from "./primitives"

type Children = { children?: React.ReactNode }
type TemplateComponent = (props: Children) => JSX.Element
type TemplateFunction = (strings: TemplateStringsArray) => TemplateComponent

type TailwindObject = {
  [key in Primitive]: TemplateFunction
}

export default () => {
  const tailwindObject: Partial<TailwindObject> = {}

  primitives.forEach(tag => {
    const TemplateFn = (strings: TemplateStringsArray) => {
      const Component = ({ children }: Children) => {
        const DynamicTag = `${tag}` as keyof JSX.IntrinsicElements

        return <DynamicTag className={strings[0]}>{children}</DynamicTag>
      }

      Component.displayName = `TailwindComponent-${tag}`

      return Component
    }

    tailwindObject[tag] = TemplateFn
  })

  return tailwindObject as TailwindObject
}
