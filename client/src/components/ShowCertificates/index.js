import { Box, Button, CircularProgress, Typography } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react"
import { API_URL } from "../../constants";
import { useNavigate, useParams } from "react-router-dom";

export const ShowCertificates = ({ contract, account }) => {
    const params = useParams();
    const [bc, setBc] = useState([]);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchBCs = async () => {
            try {
                setLoading(true);
                const resp = await axios.get(`${API_URL}/birth?walletAddr=${params.id}`);
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
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        mt: "18px"
                    }}
                >
                    {bc?.map((bc, idx) => {
                        return (
                            <Box
                                sx={{
                                    p: "24px",
                                    border: "1px solid blue",
                                    borderRadius: "12px",
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "6px"
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    }}
                                >
                                    <Typography>Child name :</Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 800
                                        }}
                                    >{bc?.childName}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    }}
                                >
                                    <Typography>Father name :</Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 800
                                        }}
                                    >{bc?.fatherName}</Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    }}
                                >
                                    <Typography>Mother name :</Typography>
                                    <Typography
                                        sx={{
                                            fontWeight: 800
                                        }}
                                    >{bc?.motherName}</Typography>
                                </Box>
                                <Button
                                    onClick={() =>
                                        navigate(
                                            `/certificate/${bc.issuingTo}/birth-certificate/${bc.txnHash}`
                                        )
                                    }
                                    sx={{
                                        border: "1px solid blue",
                                        mt: "16px"
                                    }}
                                >
                                    Show certificate
                                </Button>
                            </Box>
                        )
                    })}
                </Box>
            }
        </Box>
    )
}