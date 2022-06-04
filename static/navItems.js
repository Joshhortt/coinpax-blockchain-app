import {
  AiOutlinePieChart,
  AiOutlinePlusCircle,
  AiOutlineGift,
} from 'react-icons/ai'
import { BiTrendingUp } from 'react-icons/bi'
import { RiCoinsLine, RiNotification3Line } from 'react-icons/ri'
import { MdWeb } from 'react-icons/md'
import { BsPersonPlus } from 'react-icons/bs'

export const navItems = [
  {
    title: 'Ativos',
    icon: <AiOutlinePieChart />,
  },
  {
    title: 'Negocear',
    icon: <BiTrendingUp />,
  },
  {
    title: 'Pagar',
    icon: <RiCoinsLine />,
  },
  {
    title: 'Para Ti',
    icon: <MdWeb />,
  },
  {
    title: 'Aprender & Ganhar',
    icon: <AiOutlinePlusCircle />,
  },
  {
    title: 'Notificações',
    icon: <RiNotification3Line />,
  },
  {
    title: 'Convida Amigos',
    icon: <BsPersonPlus />,
  },
  {
    title: 'Envia Crypto Gift',
    icon: <AiOutlineGift />,
  },
]
