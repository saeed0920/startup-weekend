"use client"
import {Card,  CardHeader, CardBody, CardFooter} from "@heroui/card";
import {Image} from "@heroui/image";
import {Popover, PopoverTrigger, PopoverContent} from "@heroui/popover";
import {Divider} from "@heroui/divider";
import { useEffect, useRef, useState } from 'react';
import {Input} from "@heroui/input";
import {Button, ButtonGroup} from "@heroui/button";
import {Textarea} from "@heroui/input";

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


  return (
    <div className="flex  px-8 flex-col md:flex-row gap-4 md:gap-[10rem] justify-center items-center md:items-start">
      <Image
        alt="Woman listing to music"
        className="object-cover img-one h-[25rem] w-auto md:h-auto md:w-[700px]"
        src="./home.png"
      />
        <span className="pointer"></span>

    <div>
    <Card className="md:mt-10 max-w-full md:max-w-[600px]">
      <CardHeader dir="rtl" className="flex gap-3">
        <span className="bg-yellow-500 w-8 font-bold text-lg md:text-xl h-8 grid place-items-center rounded-full">1</span>
        <h1 className="text-xl md:text-2xl whitespace-pre-line">
          {headerText}
        </h1>
      </CardHeader>

      <Divider />

      <CardBody dir="rtl">
        {isEditing ? (
          <Textarea
            dir="rtl"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="text-right w-[35rem] h-[10rem] text-base md:text-xl"
size="lg"
          />
        ) : (
          <p className="text-right  w-[35rem] h-[10rem] text-base md:text-xl text-default-500 whitespace-pre-line">
            {bodyText}
          </p>
        )}

        <div className="flex justify-end mt-4 gap-2">
          {!isEditing ? (
            <Button  size="sm" onClick={handleEdit}>ویرایش</Button>
          ) : (
            <Button isLoading={loading} onClick={() =>{
setTimeout(() => setLoading(false),1000)
setLoading(true)

setTimeout(() => handleSend(),900)
}} size="sm">ثبت</Button>
          )}
        </div>
      </CardBody>
    </Card>
    </div>
</div>
  );
}
