import React from "react"
import { Primitive, primitives } from "./primitives"

type Children = { children?: React.ReactNode }
type TemplateComponent = (props: Children) => JSX.Element
type TemplateFunction = (strings: TemplateStringsArray) => TemplateComponent

type TemplateObject = {
  [key in keyof Primitive]: TemplateFunction
}

export default () => {
  const templateObject: Partial<TemplateObject> = {}

  primitives.forEach(tag => {
    const TemplateFn = (strings: TemplateStringsArray) => {
      const Component = ({ children }: Children) => {
        const DynamicTag = `${tag}` as keyof JSX.IntrinsicElements

        return <DynamicTag className={strings[0]}>{children}</DynamicTag>
      }

      Component.displayName = `TailwindComponent-${tag}`

      return Component
    }

    templateObject[tag] = TemplateFn
  })

  return templateObject as TemplateObject
}
