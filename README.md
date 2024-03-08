# گزارش آزمایش اول

## ماشین حساب
در این آزمایش ما یک صفحه ماشین حساب با چهار عمل اصلی طراحی کردیم که در این 
<a href="https://software-engineering-laboratory-sharif.github.io/SE-Lab-1"> لینک </a>
قابل مشاهده است:

![image](https://github.com/Software-Engineering-Laboratory-Sharif/SE-Lab-1/assets/59170401/b599fe08-32d3-4529-8079-5d32d26ccd1f)

### جزییات پیاده سازی

در شکل زیر ساختار کلی پروژه را مشاهده می‌کنید. ما دو تا branch اصلی داریم: `main` که فرایند اسقرار محصول روی آن انجام می‌شود و `staging` که تغییرات را ابتدا روی آن مرج کرده، تست می‌کنیم و سپس با `pull-request` روی `main` مرج کرده و فرایند استقرار بصورت خودکار انجام می‌شود. بقیه branch ها هم با فرمت `feature/[FEATURE_NAME]` برای ویژگی جدید و یا `fix/[FIX_TYPE]` برای حل مشکلی از یک ویژگی در نظر گرفته شده است.

![image](https://github.com/Software-Engineering-Laboratory-Sharif/SE-Lab-1/assets/59170401/0dddd3f7-7a50-4458-9924-e36b11282a3a)

همچنین فایل `gitignore.` برای جلوگیری از push شدن فایلها و فولدرهای local در نظر گرفته شده است:

![image](https://github.com/Software-Engineering-Laboratory-Sharif/SE-Lab-1/assets/59170401/fc4dc668-52a0-4a66-a06a-0a5f1b803da5)

برای حالت conflict هم زمانیکه میخواستیم شاخه `feature/calculator-functions` را یه `staging` مرج کنیم پیش آمد که با استفاده از viewer خود github آن را resolve کردیم.

![7](https://github.com/Software-Engineering-Laboratory-Sharif/SE-Lab-1/assets/59170401/3ac85a67-6c6e-468c-8be0-0087fe12fd94)

در شکلهای زیر چند نمونه از دستوراتی که استفاده کردیم را نشان دادیم:

![3](https://github.com/Software-Engineering-Laboratory-Sharif/SE-Lab-1/assets/59170401/010ecee3-e73a-4acb-b65f-7bf1dbfde755)

![1](https://github.com/Software-Engineering-Laboratory-Sharif/SE-Lab-1/assets/59170401/6c559467-ec1a-4fc0-bfb7-e3b49305022a)

![2](https://github.com/Software-Engineering-Laboratory-Sharif/SE-Lab-1/assets/59170401/d4325573-069c-43dc-8832-df3a92f2888d)

همچنین برای محافظت از شاخه `main` یک rule‌را اضافه کردیم تا هیچ کس حتی administrator نتواند مستقیما به آن پوش کند.
برای آن گزینه‌های `Require a pull request before merging` و `Do not allow bypassing the above settings` را فعال کردیم.

![image](https://github.com/Software-Engineering-Laboratory-Sharif/SE-Lab-1/assets/59170401/325a43d3-839e-4ae3-a7c8-5973d96c62bb)

بعد از آن نتوانستیم مستقیما به `main` پوش کنیم:

![6-1](https://github.com/Software-Engineering-Laboratory-Sharif/SE-Lab-1/assets/59170401/ae4d34a8-86cd-411d-b5be-1edb0e629df3)

برای افزودن قابلیت به `main` و `staging` از pull request استفاده کردیم و بعد از review و approve آن را مرج کردیم.

![4](https://github.com/Software-Engineering-Laboratory-Sharif/SE-Lab-1/assets/59170401/33032f92-6b2a-4b82-8947-9b9bde98ac00)

![5](https://github.com/Software-Engineering-Laboratory-Sharif/SE-Lab-1/assets/59170401/644364e0-6959-4c7a-a2aa-5fbe68a24c18)

برای استقرار محصول در github pages از workflow های آماده استفاده کردیم. در آن آدرس root پروژه و شاخه‌ای که باید روی صفحه مستقر شود را مشخص می‌کنیم.

![2024-03-08 (7)](https://github.com/Software-Engineering-Laboratory-Sharif/SE-Lab-1/assets/59170401/56f0aa52-4716-4e85-bc14-80248fa72e23)

آدرس جایی که محصول مستقر می‌شود هم بعدا نشان داد:

![2024-03-08 (8)](https://github.com/Software-Engineering-Laboratory-Sharif/SE-Lab-1/assets/59170401/b8676153-3685-4189-a96d-ea69519e7a4b)

بعد از آن با هر push روی `main` اکشن مربوطه اجرا می‌شد.

![8](https://github.com/Software-Engineering-Laboratory-Sharif/SE-Lab-1/assets/59170401/800c1136-c5be-4b45-a658-b41cf28376d6)


## پرسشها
1. پوشه‌ی `git.` چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟

این پوشه شامل همه پیکربندیهای مورد نیاز گیت است. در بخش زیر به تعدادی از آنها اشاره میکنیم:

- مورد اول `head`: برای دنبال کردن آنچه در شاخه فعلی اتفاق می‌افتد.
- مورد دوم `refs`: ذخیره سازی ارجاعات به شاخه‌ها و کامیتها.
- مورد سوم `objects`: ذخیره سازی codebase به شکل دنباله‌ای از snapshot ها.
- مورد چهارم `config`: ذخیره سازی اطلاعات پیکربندی مختص گیت.
- مورد پنجم `hooks`: اجرای اسکریپت برای نقاط خاصی در workflow مربوط به گیت.
<div dir="rtl">

</div>
 
2. منظور از atomic بودن در atomic commit و atomic pull-request چیست؟

در commit معنی atomic این است که همه تغییرات در یک commit باید باهم اتفاق بیفتند؛ این به این معنی است که اگر یک تغییر در commit با مشکل مواجه شود، هیچکدام از تغییرات commit اعمال نمی‌شوند.همین اصل برای pull-request هم وجود دارد؛ در واقع pull-request هم مجموعه‌ای از commit ها است و در صورتی که یک commit به مشکل بخورد، pull-request به خطا می‌خورد.

3. تفاوت دستورهای `fetch` و `pull` و `merge` و `rebase` و `cherry-pick` را بیان کنید.

در قسمتهای زیر به بیان تعریف و تفاوت آنها می‌پردازیم:
- در `merge` یک commit ایجاد می‌شود که تفاوت بین شاخه مقصد با شاخه فعلی را بیان می‌کند.
- در `rebase` تغییرات یک شاخه را در شاخه دیگر merge می کند، تاریخچه مربوط به شاخه را خطی می کند و از merge های غیر ضروری اجتناب می کند. بنابراین برخلاف `merge` هیچ commit ای برای این تغییرات ایجاد نمی‌کند.
- در `cherry-pick` بر خلاف دو مورد قبلی برای مواردی استفاده می‌شود که به تنها چند commit از شاخه دیگر نیاز دارد؛ یعنی می‌توانیم از شاخه دیگر، چندتا commit انتخاب کنیم و آن را به شاخه فعلی merge کنیم؛ بدون آنکه کل شاخه را merge کنیم.
- در `fetch` تغییرات شاخه را از remote repository به local می‌آورد ولی آن را به شاخه merge نمی‌کند.
- در `pull` عملیات `fetch` و `merge` از remote branch به شاخه local انجام می‌دهد.

4. تفاوت دستورهای `reset` و `revert` و `restore` و `switch` و `checkout` را بیان کنید.

- در `reset` ما working directory را به commit مشخصی rollback می‌کنیم؛ به این شکل که شاخه فعلی را به آن حالت برگردانده و commit ها از آنجا به بعد حذف می‌شوند. این مورد برای حذف تغییراتی که commit نشدند، مناسب است.
- در `revert` بر خلاف `reset` برای rollback تغییرات commit هم ساخته می‌شود و آن تغییرات را بیان می‌کند. این مورد برای rollback کردن تغییرات commit شده مناسب است.
- در `restore` ما به منظور بازیابی فایلهای working tree از index یا commit مشخص از این دستور استفاده می‌کنیم. این دستور branch را آپدیت نمی‌کند. همچنین می‌توانیم برای بازیابی فایلها از index مربوط به commit دیگر استفاده کنیم.
- در `switch` ما برای جابجایی و ایجاد branch جدید از آن استفاده می‌کنیم. محدودیتی که نسبت به `checkout` دارد این است که اگر تغییری در فایل tracked داشته باشیم ابتدا باید آن را `stash` یا `commit` کنیم و سپس بین branch ها جابجا شویم؛ در غیر اینصورت به خطا میخوریم.
- در `checkout` چندین کار همزمان انجام می‌شود و اگر حواسمان نباشد ممکن است به مشکل بخوریم. در واقع می‌توانیم بین branch های مختلف جابجا شویم و branch های جدید بسازیم. همچنین اگر تغییراتی در فایلهای tracked داشته باشیم به ما این اجازه را می‌دهد تا switch کنیم و ممکن است در commit کردن تغییرات مربوط به branch جدید دچار خطا شویم.

5. منظور از `stage` یا همان `index` چیست؟ دستور `stash` چه کاری را انجام می‌دهد؟

منظور از `stage` همان محیطی است که تغییراتی که می‌خواهیم commit کنیم در آن قرار می‌گیرد و به ما این قابلیت را می‌دهد که چه تغییراتی را برای commit در نظر بگیریم. دستور `stash` بصورت موقت آن تغییرات را در محیط local ذخیره می‌کند تا ما بتوانیم کار دیگری انجام دهیم (یکی از کاربردهای استفاده آن در `switch` بود که در سوال قبل اشاره شد). هر زمانی که به آن تغییرات نیاز داشتیم، می‌توانیم با `git stash pop` آن را از حالت stashed خارج کنیم.

6. مفهوم snapshot به چه معناست؟ ارتباط آن با commit چیست؟

به معنی وضعیت یک چیز (مثلا فایل یا فولدر) در زمان مشخصی است؛ یعنی چه کسی چه تغییری را در کدام قسمت آن ایجاد کرده است و ... . در واقع هر commit دارای یک snapshot از کل وضعیت repository تا به آنجا است؛ بجای آنکه فقط تغییرات جدید را ذخیره کند. به عبارتی `!commits are snapshots, not diffs`.

7. تفاوت‌های local repository و remote repository چیست؟

اگر یک تیم با local repository کار کند، پروژه فقط در سیستم اعضای تیم است؛ در حالیکه remote repository در سروری روی اینترنت یا شبکه داخلی مستقر می‌شود که برای همه اعضای تیم قابل دسترس است.
