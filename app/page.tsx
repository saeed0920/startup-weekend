"use client"
import {Card,  CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Image} from "@heroui/image";
import {Popover, PopoverTrigger, PopoverContent} from "@heroui/popover";
import {Divider} from "@heroui/divider";
import { useEffect, useRef, useState } from 'react';
import {Input} from "@heroui/input";
import {Button, ButtonGroup} from "@heroui/button";
import {Textarea} from "@heroui/input";
import { Link } from "@heroui/link";

export default function Home() {

  const headerText = `سیستم گرمایشی فعال شد.\nدمای اتاق ۲۲ درجه تنظیم گردید.`;
  const [isEditing, setIsEditing] = useState(false);
  const [bodyText, setBodyText] = useState(`امروز ۱۱ اسفند، با توجه به شرایط آب‌و‌هوایی، دمای هوا ۸ درجه سانتی‌گراد و وضعیت جوی نیمه‌ابری گزارش شده است.
با توجه به موقعیت مکانی شما و الگوی رفتاری روزهای گذشته، در این ساعت معمولاً در مسیر بازگشت از محل کار به خانه هستید و کمی بعد به استراحت روزانه می‌پردازید.
به همین دلیل، شرایط اتاق را برای استراحت شما فراهم کرده‌ام.`);

  const [inputValue, setInputValue] = useState(bodyText);
  const [loading, setLoading] = useState(false);

  const handleEdit = () => {
    setInputValue(bodyText);
    setIsEditing(true);
  };

  const handleSend = () => {
    setBodyText(inputValue);
    setIsEditing(false);
  };


const cardData = [
  {
    image: "https://api.iconify.design/octicon:light-bulb-16.svg?color=%2300bbfa",
    title: "شخصی‌سازی مبتنی بر هوش مصنوعی",
    body: "سیستم هوشمند ما ترجیحات و رفتارهای فردی را یاد می‌گیرد تا محیط ایده‌آل را برای هر کاربر بدون نیاز به تنظیمات دستی ایجاد کند.",
  },
  {
    image: "https://api.iconify.design/material-symbols:settings.svg?color=%2300bbfa",
    title: "پیکربندی خودکار",
    body: "نصب بسیار ساده با شناسایی خودکار دستگاه‌ها و راه‌اندازی بدون دخالت دستی. نیازی به تخصص فنی نیست.",
  },
  {
    image: "https://api.iconify.design/solar:temperature-bold.svg?color=%2300bbfa",
    title: "کنترل هوشمند دما",
    body: "شیرهای الکترونیکی به طور خودکار گرمایش کف را بر اساس الگوهای حضور و ترجیحات دمایی یادگیری شده تنظیم می‌کنند.",
  }
]


  return (
<div className="flex gap-2 flex-col">
    <div className="flex  px-8 flex-col md:flex-row gap-4 md:gap-[4rem] justify-center items-center md:items-start">
      <Image
        alt="Woman listing to music"
        className="object-cover h-[25rem] w-auto md:h-auto md:w-[700px]"
        src="./home.png"
      />
        <span className="pointer"></span>

    <div>
    <Card className="md:mt-10 max-w-full md:max-w-[900px]">
      <CardHeader dir="rtl" className="flex gap-3">
        <span className="bg-yellow-500 w-8 font-bold text-lg md:text-xl h-8 grid place-items-center rounded-full">1</span>
        <h1 className="text-xl md:text-3xl whitespace-pre-line">
          {headerText}
        </h1>
      </CardHeader>

      <Divider />

      <CardBody dir="rtl">
        {isEditing ? (
          <Textarea
          style={{fontSize: "1.3rem"}}
            dir="rtl"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="text-right w-full md:w-[35rem] md:h-[10rem] !text-base md:text-xl"
size="lg"
          />
        ) : (
          <p className="text-right w-full md:w-[35rem] md:h-[10rem] text-base md:text-xl text-neutral-700 dark:text-neutral-300 whitespace-pre-line">
            {bodyText}
          </p>
        )}

        <div className="flex justify-end mt-4 gap-2">
          {!isEditing ? (
            <Button  size="md" onClick={handleEdit}>ویرایش</Button>
          ) : (
            <Button isLoading={loading} onClick={() =>{
setTimeout(() => setLoading(false),1000)
setLoading(true)

setTimeout(() => handleSend(),900)
}} size="md">ثبت</Button>
          )}
        </div>
      </CardBody>
    </Card>
    </div>

</div>
  <div className="w-full px-4 py-8  text-black">
<div className="text-center mb-10">
  <h2 className="text-3xl md:text-4xl dark:text-white font-bold text-gray-900">
مدیریت هوشمند ساختمان
  </h2>
  <p className="mt-2 text-base md:text-lg dark:text-neutral-300 text-gray-600" dir="rtl">
راهکار جامع ما هوش مصنوعی، اتوماسیون و بهره‌وری انرژی را برای ایجاد ساختمان‌های هوشمندتر و راحت‌تر گرد هم می‌آورد.
  </p>
</div>

      <div className="grid gap-4 md:gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {cardData.map((card, index) => (
          <Card key={index} className="w-full py-4 px-2 md:py-6 md:px-4  md:max-w-[500px] shadow-md border border-gray-200 dark:border-none">
            <CardHeader className="flex flex-row-reverse justify-start gap-2 md:gap-4">
              <Image
                alt={`${card.title} logo`}
                height={50}
                radius="sm"
                src={card.image}
                width={50}
              />
              <div className="flex flex-col">
                <p className="text-xl md:text-2xl font-semibold md:font-bold text-right" dir="rtl" >{card.title}</p>
              </div>
            </CardHeader>

            <Divider />

            <CardBody>
              <p className="text-gray-800 dark:text-neutral-300 font-normal md:font-semibold text-base md:text-md text-right" dir="rtl">{card.body}</p>
            </CardBody>
            </Card>
        ))}
      </div>
    </div>
</div>
  );
}
