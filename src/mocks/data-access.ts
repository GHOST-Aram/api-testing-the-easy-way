import { IItem, Item } from "../item.model";

export class APIDAL{
    public createNewItem = jest.fn(async(data: IItem) =>{
        const item = new Item({
            title: data.title, 
            pages: data.pages
        })
    
        return ({
            title: item.title,
            pages: item.pages,
            _id: item._id,
            id: item.id

        })
    })
}