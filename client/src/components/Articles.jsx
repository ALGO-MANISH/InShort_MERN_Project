import { Box } from "@mui/system";
import { useEffect, useState } from "react";
import { getNews } from "../service/Api";
import ArticlesData from './ArticlesData';


const Articles = () => {

    useEffect(() => {
        getDailyNews();

    }, []);


    const [news, setNews] = useState([]);



    const getDailyNews = async () => {
        let response = await getNews();
        setNews(response.data);
        //    console.log(response.data);
    }



    return (
        <Box>
            {
                news.map(data => {
                    return <ArticlesData data={data} />
                })
            }

        </Box>
    )
}

export default Articles;