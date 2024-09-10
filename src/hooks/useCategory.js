import { useQuery } from "@tanstack/react-query";
import { getCategoryApi } from "../services/categorySevice";

export default function useCategory(){
   const {isLoading ,data}= useQuery({
        queryKey:['categories'],
        queryFn:getCategoryApi
    })

    const {categories:rowCategoris=[]}=data||{}

    const categories=rowCategoris.map(item=>({
        label:item.title,
        value:item._id
    }))

    const transformedCategories=rowCategoris.map(item=>({
        label:item.englishTitle,
        value:item._id
    }))


    return {isLoading,categories,transformedCategories}
}