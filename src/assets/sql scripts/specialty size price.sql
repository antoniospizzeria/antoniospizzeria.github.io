
 select '{ "name": "'+sizename+'", "price": "$'+cast(price as varchar(10))+'"},' as 'size'
 from [dbo].[MenuItmSzXRef]
 where itemname = 'supreme pizza' and SizeName != 'slice'
 order by  size