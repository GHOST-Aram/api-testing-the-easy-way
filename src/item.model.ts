import mongoose, { HydratedDocument } from "mongoose"

interface IItem{
    title: string
    pages: number
}

type ItemModel = mongoose.Model<IItem>

const itemSchema = new mongoose.Schema<IItem, ItemModel>({
    title: String,
    pages: Number
})

export type HydratedItemDoc = HydratedDocument<IItem>
export const Item = mongoose.model<IItem, ItemModel>('Item', itemSchema)