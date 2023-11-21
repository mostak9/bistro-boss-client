import Cover from "../../Shared/Cover/Cover";
import banner from "../../../assets/shop/banner2.jpg";
import useMenu from "../../../hooks/useMenu/useMenu";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import ShopCard from "../ShopCard/ShopCard";
import { useParams } from "react-router-dom";

const Shop = () => {

  const [items, isLoading] = useMenu();
  const {category} = useParams();

  if (isLoading)
    return <span className="loading loading-infinity loading-lg"></span>;

  const drinks = items.filter((item) => item.category === "drinks");
  const dessert = items.filter((item) => item.category === "dessert");
  const salad = items.filter((item) => item.category === "salad");
  const pizza = items.filter((item) => item.category === "pizza");
  const soup = items.filter((item) => item.category === "soup");

  return (
    <div>
      <Cover
        title="OUR SHOP"
        description="Would you like to try a dish?"
        img={banner}
      />
      <div className="text-center my-12">
        <Tabs id="custom-animation" value={category || salad[0].category}
        >
          <TabsHeader
          className="rounded-none border-blue-gray-50  bg-transparent p-0 max-w-md mx-auto mb-5 uppercase"
          indicatorProps={{
            className:
              "bg-transparent border-b-4 border-[#BB8506]  text-[#BB8506] shadow-none rounded-none",
          }}>
            

            <Tab value={salad[0].category}>Salad</Tab>
            <Tab value={pizza[0].category}>pizza</Tab>
            <Tab value={soup[0].category}>soup</Tab>
            <Tab value={dessert[0].category}>dessert</Tab>
            <Tab value={drinks[0].category}>drinks</Tab>
          </TabsHeader>
          <TabsBody
            animate={{
              initial: { y: 250 },
              mount: { y: 0 },
              unmount: { y: 250 },
            }}
          >
            <TabPanel value={salad[0].category} className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
              {
                salad.map(item => <ShopCard key={item._id} item={item}/>)
              }
            </TabPanel>
            <TabPanel value={pizza[0].category}  className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
              {
                pizza.map(item => <ShopCard key={item._id} item={item}/>)
              }
            </TabPanel>
            <TabPanel value={soup[0].category}  className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
              {
                soup.map(item => <ShopCard key={item._id} item={item}/>)
              }
            </TabPanel>
            <TabPanel value={dessert[0].category}  className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
              {
                dessert.map(item => <ShopCard key={item._id} item={item}/>)
              }
            </TabPanel>
            <TabPanel value={drinks[0].category}  className='grid md:grid-cols-2 lg:grid-cols-3 gap-7'>
              {
                drinks.map(item => <ShopCard key={item._id} item={item}/>)
              }
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
};

export default Shop;
