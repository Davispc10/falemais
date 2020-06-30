import { createSchema, typedModel, Type, ExtractDoc, ExtractProps } from 'ts-mongoose'

export const TariffSchema = createSchema({
  origin: Type.string({ required: true }),
  destiny: Type.string({ required: true }),
  tax: Type.number({ required: true })
}, {
  timestamps: true
})

export const Tariff = typedModel('Tariff', TariffSchema)
export type TariffDoc = ExtractDoc<typeof TariffSchema>
export type TariffProps = ExtractProps<typeof TariffSchema>
