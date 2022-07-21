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
                    type="checkbox" value="Analytics" defaultChecked={category.includes('Analytics')} />
                <label>Analytics & reporting</label>
            </Box>

            <Box>
                <input
                    onChange={handleChangebox}
                    type="checkbox" value="Browser" defaultChecked={category.includes('Browser')} />
                <label>Browser extensions</label>
            </Box>

            <Box>
                <input
                    onChange={handleChangebox}
                    type="checkbox" value="communication" defaultChecked={category.includes('communication')} />
                <label>Communication & CRM</label>
            </Box>

            <Box>
                <input
                    onChange={handleChangebox}
                    type="checkbox" value="Contracts" defaultChecked={category.includes('Contracts')} />
                <label>Contracts & proposals</label>
            </Box>

            <Box>
                <input
                    onChange={handleChangebox}
                    type="checkbox" value="Development" defaultChecked={category.includes('Devlopment')} />
                <label>Development & connectivity</label>
            </Box>

            <Box>
                <input
                    onChange={handleChangebox}
                    type="checkbox" value="Featured" defaultChecked={category.includes('Featured')} />
                <label>Featured integrations</label>
            </Box>

            <Box>
                <input
                    onChange={handleChangebox}
                    type="checkbox" value="Finance" defaultChecked={category.includes('Finance')} />
                <label>Finance & payments</label>
            </Box>

            <Box>
                <input
                    onChange={handleChangebox}
                    type="checkbox" value="Issue" defaultChecked={category.includes('Issue')} />
                <label>Issue tracking & support</label>
            </Box>

            <Box>
                <input
                    onChange={handleChangebox}
                    type="checkbox" value="Productivity" defaultChecked={category.includes('Productivity')} />
                <label>Productivity</label>
            </Box>

            <Box>
                <input
                    onChange={handleChangebox}
                    type="checkbox" value="Project" defaultChecked={category.includes('Project')} />
                <label>Project management</label>
            </Box>


        </div>
    )
}
