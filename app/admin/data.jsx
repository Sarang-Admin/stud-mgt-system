import { MdDashboard } from "react-icons/md";
import { PiStudent } from "react-icons/pi";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { SlCalender } from "react-icons/sl";
import { SiGoogleclassroom } from "react-icons/si";
import { LuBookOpenCheck } from "react-icons/lu";
import { IoBusOutline, IoStorefrontOutline } from "react-icons/io5";
import { BsBuildings } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";

export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Dashboard",
        url: "/admin/dashboard",
        icon: <MdDashboard />,
      },
      {
        id: 2,
        title: "Teachers",
        url: "/admin/teacherManagement",
        icon: <LiaChalkboardTeacherSolid />,
      },
      {
        id: 3,
        title: "Students",
        url: "/admin/studentManagement",
        icon: <PiStudent />,
      },
    ],
  },
  {
    id: 2,
    title: "academics",
    listItems: [
      {
        id: 1,
        title: "Sessions",
        url: "/admin/dashboard",
        icon: <SlCalender />,
      },
      {
        id: 2,
        title: "Classes",
        url: "/admin/dashboard",
        icon: <SiGoogleclassroom />,
      },
      {
        id: 3,
        title: "Subjects",
        url: "/admin/dashboard",
        icon: <LuBookOpenCheck />,
      },
    ],
  },
  {
    id: 3,
    title: "administrative",
    listItems: [
      {
        id: 1,
        title: "Transport",
        url: "/admin/dashboard",
        icon: <IoBusOutline />,
      },
      {
        id: 2,
        title: "Hostels",
        url: "/admin/dashboard",
        icon: <BsBuildings />,
      },
      {
        id: 3,
        title: "Consumer Store",
        url: "/admin/consumerStore",
        icon: <IoStorefrontOutline />,
      },
    ],
  },
];

export const uniToppers = [
  {
    id: 1,
    img: "/images/student-images/student9.jpg",
    name: "Kirtan Patel",
    standard: "8A",
    percentage: "92%",
  },
  {
    id: 2,
    img: "/images/student-images/student9.jpg",
    name: "Kirtan Patel",
    standard: "8A",
    percentage: "92%",
  },
  {
    id: 3,
    img: "/images/student-images/student9.jpg",
    name: "Kirtan Patel",
    standard: "8A",
    percentage: "92%",
  },
  {
    id: 4,
    img: "/images/student-images/student9.jpg",
    name: "Kirtan Patel",
    standard: "8A",
    percentage: "92%",
  },
  {
    id: 5,
    img: "/images/student-images/student9.jpg",
    name: "Kirtan Patel",
    standard: "8A",
    percentage: "92%",
  },
];

export const chartBoxUser = {
  color: "#8884d8",
  icon: <FaUsers />,
  title: "Total Users",
  number: "325",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Sun", users: 400 },
    { name: "Mon", users: 300 },
    { name: "Tue", users: 550 },
    { name: "Wed", users: 600 },
    { name: "Thu", users: 300 },
    { name: "Fri", users: 700 },
    { name: "Sat", users: 450 },
  ],
};

export const chartBoxTeacher = {
  color: "#a0d0d0",
  icon: <LiaChalkboardTeacherSolid />,
  title: "Total Teachers",
  number: "18",
  dataKey: "teachers",
  percentage: 22,
  chartData: [
    { name: "Sun", teachers: 5 },
    { name: "Mon", teachers: 8 },
    { name: "Tue", teachers: 9 },
    { name: "Wed", teachers: 12 },
    { name: "Thu", teachers: 3 },
    { name: "Fri", teachers: 6 },
    { name: "Sat", teachers: 2 },
  ],
};

export const chartBoxStudent = {
  color: "#f27d52",
  icon: <PiStudent />,
  title: "Total Students",
  number: "1125",
  dataKey: "students",
  percentage: 38,
  chartData: [
    { name: "Sun", students: 735 },
    { name: "Mon", students: 665 },
    { name: "Tue", students: 815 },
    { name: "Wed", students: 312 },
    { name: "Thu", students: 752 },
    { name: "Fri", students: 187 },
    { name: "Sat", students: 666 },
  ],
};

export const chartBoxSubject = {
  color: "#bc131f",
  icon: <LuBookOpenCheck />,
  title: "Total Subjects",
  number: "32",
  dataKey: "subjects",
  percentage: 38,
  chartData: [
    { name: "Sun", subjects: 7 },
    { name: "Mon", subjects: 6 },
    { name: "Tue", subjects: 8 },
    { name: "Wed", subjects: 3 },
    { name: "Thu", subjects: 7 },
    { name: "Fri", subjects: 2 },
    { name: "Sat", subjects: 6 },
  ],
};

export const barChartBoxResult = {
  title: "Yearly Results",
  color: "#FF8042",
  dataKey: "result",

  chartData: [
    {
      year: 2019,
      result: 78,
    },
    {
      year: 2020,
      result: 92,
    },
    {
      year: 2021,
      result: 68,
    },
    {
      year: 2022,
      result: 90,
    },
    {
      year: 2023,
      result: 93,
    },
  ],
};

export const barChartFeesCollected = {
  title: "Yearly Fees Collection",
  color: "#8884d8",
  dataKey: "fees",

  chartData: [
    {
      year: 2019,
      fees: 175000,
    },
    {
      year: 2020,
      fees: 193000,
    },
    {
      year: 2021,
      fees: 186000,
    },
    {
      year: 2022,
      fees: 161000,
    },
    {
      year: 2023,
      fees: 170000,
    },
  ],
};
