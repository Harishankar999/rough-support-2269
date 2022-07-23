import React, { useEffect, useState } from 'react'
import { useSearchParams } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { Box } from '@chakra-ui/react'

export const FilterSort = () => {



    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()


    const urlCategory = searchParams.getAll('category')

    const [category, setCategory] = useState(urlCategory || [])




    const handleChangebox = (e) => {
        const option = e.target.value;
        let newCategory = [...category];



        if (category.includes(option)) {
            //remove it
            newCategory.splice(category.indexOf((option), 1))


        } else {
            newCategory.push(option)
        }
        setCategory(newCategory)
    }

    useEffect(() => {
        if (category) {
            let params = {};
            category && (params.category = category);

            setSearchParams(params)

        }
    }, [category, setSearchParams])

    return (
        <div>

            <Box>
                <input
                    onChange={handleChangebox}
                    type="checkbox" value="All" defaultChecked={category.includes('All')} />
                <label>All Integrations</label>
            </Box>

            <Box>
                <input
                    onChange={handleChangebox}
                    type="checkbox" value="Architecture" defaultChecked={category.includes('Architecture')} />
                <label>Architecture</label>
            </Box>

            <Box>
                <input
                    onChange={handleChangebox}
                    type="checkbox" value="Creative" defaultChecked={category.includes('Creative')} />
                <label>Creative</label>
            </Box>

            <Box>
                <input
                    onChange={handleChangebox}
                    type="checkbox" value="Engineering" defaultChecked={category.includes('Engineering')} />
                <label>Engineering</label>
            </Box>

            <Box>
                <input
                    onChange={handleChangebox}
                    type="checkbox" value="Management" defaultChecked={category.includes('Management')} />
                <label>Management</label>
            </Box>

            <Box>
                <input
                    onChange={handleChangebox}
                    type="checkbox" value="WebDevelopment" defaultChecked={category.includes('WebDevlopment')} />
                <label>WebDevelopment &  IT</label>
            </Box>



        </div>
    )
}