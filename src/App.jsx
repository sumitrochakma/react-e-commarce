import { useState } from 'react'

import './App.css'
import Menu from './components/Menu'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Logo from '../src/assets/Logo.png'
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import Heading from './components/Heading'
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { PiNumberTwoFill, } from "react-icons/pi";
import { FaCarSide } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* header part start */}
     <div className="w-full py-[30px]">
      <Container className={"max-w-headerContainer"}>
        <Flex>
          <div className="w-logoW">
          <Image imgSrc={Logo}/>
          </div>
          <div className="w-menuW">
            <Flex>
              <Menu menuName={"home"}/>
              <Menu menuName={"Shop"}/>
              <Menu menuName={"About"}/>
              <Menu menuName={"Contacts"}/>
            </Flex>
          </div>
        </Flex>
      </Container>
     </div>
     {/* header part end */}
     {/* Catagory part start */}
     <div className="w-full bg-catagoryBg py-[40px] border border-menuText">
      <Container className={"max-w-headerContainer"}>
     <Flex className={"items-center"}>
      <div className="w-1/5">
     <Flex className={"gap-x-2 pr-10"}>
     <HiMiniBars3BottomLeft /> <Heading as="h3" className={"text-sm font-dm text-menuTextH"} text={"Shop by Category"}/>
     </Flex>
      </div>
      <div className="w-3/5 relative">
      <input type="text" className="p-4 bg-white rounded-lg w-full" placeholder="Search products" />
      <FaSearch className=" absolute top-1/2 right-5 -translate-y-1/2"/>
      </div>
      <div className="w-1/5">
      <Flex className={"justify-end"}>
      <FaUser className="ml-2"/>
      <FaCaretDown className="mr-7"/>
      <FaShoppingCart />
      </Flex>
      </div>
     </Flex>
      </Container>
     </div>
     {/* catagory part end */}
     {/* Banner part start */}
     <div className="bg-bannerImg py-[300px]"></div>
     {/* Banner part end */}
     {/* information part start */}
     <div className="w-full py-[30px]">
      <Container className={"max-w-headerContainer"}>
       <Flex className={"justify-between"}>
        <div className="w-[30%]">
        <Flex className={"gap-x-3"}>
          <PiNumberTwoFill />
        <Heading as={"h3"} text={"Two years warranty"} className={" font-dm text-sm"}/>
        </Flex>
        </div>
        <div className="w-[30%]">
        <Flex className={"gap-x-3"}>
        <FaCarSide />
        <Heading as={"h3"} text={"Free shipping"} className={" font-dm text-sm"}/>
        </Flex>
        </div>
        <div className="w-[30%]">
        <Flex className={"gap-x-3"}>
        <FaUndo />
        <Heading as={"h3"} text={"Return policy in 30 days"} className={" font-dm text-sm"}/>
        </Flex>
        </div>
       </Flex>
      </Container>
     </div>
     {/* information part end */}
    </>
  )
}

export default App
