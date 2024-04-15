import { Box, CircularProgress } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react"
import { API_URL } from "../../constants";

export const ShowCertificates = ({ contract, account }) => {

    const [bc, setBc] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchBCs = async () => {
            try {
                setLoading(true);
                const resp = await axios.get(`${API_URL}/birth?walletAddr=${account}`);
                console.log(resp.data);
                setBc(() => resp.data.birthCertificates);
                console.log(bc)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }
        fetchBCs();
    }, [])


    return (
        <Box>
            {loading ? <CircularProgress />
                :
                <Box>
                    {bc?.map((bc, idx) => {
                        return (
                            <Box>
                                {bc?.childName}
                            </Box>
                        )
                    })}
                </Box>
            }
        </Box>
    )
}