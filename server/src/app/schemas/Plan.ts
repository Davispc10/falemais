import { createSchema, typedModel, Type, ExtractDoc, ExtractProps } from 'ts-mongoose'

export const PlanSchema = createSchema({
  description: Type.string({ required: true }),
  time: Type.number({ required: true }),
  add: Type.number({ required: true })
}, {
  timestamps: true
})

export const Plan = typedModel('Plan', PlanSchema)
export type PlanDoc = ExtractDoc<typeof PlanSchema>
export type PlanProps = ExtractProps<typeof PlanSchema>
