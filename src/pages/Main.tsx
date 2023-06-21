import { useEffect, useState } from 'react';
import CardCat from '../components/CardCat';
import { Category } from '../object/Category';
import { Link } from 'react-router-dom';
const Main = () => {
    const [category, setCategory] = useState<Category[] | []>([]);
    useEffect(() => {
        const fetchCategory = async () => {
            const response = await fetch('http://localhost:5137/categorys');
            const data = await response.json();
            setCategory(data);
        }
        fetchCategory();
    }, []);
    return (
        <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-[30px]
                    mx-w-sm mx-auto md:max-w-none md:mx-0">
                {category.map(cat => {
                    console.log(cat.description);
                    return (
                        <Link to={cat.link} key={cat.title}>
                            <CardCat title={cat.title} image={cat.image} description={cat.description} key={cat.id} />
                        </Link>
                    )
                }
                )}
            </div>
        </div>
    )
}
export default Main;