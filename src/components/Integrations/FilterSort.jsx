import React, { useEffect, useState } from 'react'
// import { useSearchParams } from "react-router-dom"
// import { useDispatch } from 'react-redux'

export const FilterSort = () => {

    // const dispatch = useDispatch()
    // const [searchParams, setSearchParams] = useSearchParams()

    // const urlCategory = searchParams.getAll('category')

    // const urlSort = searchParams.get('sortBy')
    const [category, setCategory] = useState([])

    // const [sortBy, setSortBy] = useState(urlSort || "")

    // const handleChangebox = (e) => {
    //     const option = e.target.value;
    //     let newCateogry = [...category];

    //     if (category.includes(option)) {
    //         //remove it
    //         newCateogry.splice(newCateogry.indexOf(option), 1)

    //     } else {
    //         newCateogry.push(option)
    //     }
    //     setCategory(newCateogry)
    // }

    // const handleSort = (e) => {
    //     setSortBy(e.target.value)
    // }

    // useEffect(() => {
    //     if (category || sortBy) {
    //         let params = {};
    //         category && (params.category = category);
    //         sortBy && (params.sortBy = sortBy)
    //         setSearchParams(params)
    //         //  dispatch(getBooks({ params: { category } }))
    //     }
    // }, [category, dispatch, setSearchParams, sortBy])

    // useEffect(() => {
    //     if (sortBy) {
    //         const params = {
    //             category: searchParams.getAll('category'),
    //             sortBy
    //         };


    //         setSearchParams(params)
    //         // dispatch(getBooks(getBooksParams))
    //     }
    // }, [searchParams, dispatch, setSearchParams, sortBy])

    return (
        <div>

            <div>
                <input
                    //  onChange={handleChangebox}
                    type="checkbox" value="Novel" defaultChecked={category.includes('Novel')} />
                <label>All Integrations</label>
            </div>

            <div>
                <input
                    //onChange={handleChangebox}
                    type="checkbox" value="Science" defaultChecked={category.includes('Science')} />
                <label>Analytics & reporting</label>
            </div>

            <div>
                <input
                    // onChange={handleChangebox}
                    type="checkbox" value="Thirller" defaultChecked={category.includes('Thirller')} />
                <label>Browser extensions</label>
            </div>

            <div>
                <input
                    // onChange={handleChangebox}
                    type="checkbox" value="Thirller" defaultChecked={category.includes('Thirller')} />
                <label>Communication & CRM</label>
            </div>

            <div>
                <input
                    // onChange={handleChangebox}
                    type="checkbox" value="Thirller" defaultChecked={category.includes('Thirller')} />
                <label>Contracts & proposals</label>
            </div>

            <div>
                <input
                    // onChange={handleChangebox}
                    type="checkbox" value="Thirller" defaultChecked={category.includes('Thirller')} />
                <label>Development & connectivity</label>
            </div>

            <div>
                <input
                    // onChange={handleChangebox}
                    type="checkbox" value="Thirller" defaultChecked={category.includes('Thirller')} />
                <label>Featured integrations</label>
            </div>

            <div>
                <input
                    // onChange={handleChangebox}
                    type="checkbox" value="Thirller" defaultChecked={category.includes('Thirller')} />
                <label>Finance & payments</label>
            </div>

            <div>
                <input
                    // onChange={handleChangebox}
                    type="checkbox" value="Thirller" defaultChecked={category.includes('Thirller')} />
                <label>Issue tracking & support</label>
            </div>

            <div>
                <input
                    // onChange={handleChangebox}
                    type="checkbox" value="Thirller" defaultChecked={category.includes('Thirller')} />
                <label>Productivity</label>
            </div>

            <div>
                <input
                    // onChange={handleChangebox}
                    type="checkbox" value="Thirller" defaultChecked={category.includes('Thirller')} />
                <label>Project management</label>
            </div>


        </div>
    )
}
