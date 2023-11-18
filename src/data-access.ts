import { IItem, Item } from "./item.model";

export class APIDAL{
    public createNewItem = async(data: IItem) =>{
        const item = new Item({
            title: data.title, 
            pages: data.pages
        })
    
        const savedItem = await item.save()

        return ({
            title: savedItem.title,
            pages: savedItem.pages,
            _id: savedItem._id,
            id: savedItem.id

        })
    }
}