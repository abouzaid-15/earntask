// انتظر حتى يتم تحميل كل محتوى الصفحة
document.addEventListener('DOMContentLoaded', () => {

    // الحصول على كل عناصر البطاقات من الصفحة
    const allCards = document.querySelectorAll('.card');

    // الحصول على عناصر النافذة المنبثقة (المودال)
    const modalOverlay = document.getElementById('modal-locker');
    const closeModalButton = document.querySelector('.close-button');
    const modalTitle = document.getElementById('modal-title');
    const lockerPlaceholder = document.querySelector('.content-locker-placeholder');

    // هذه الدالة تقوم بإظهار النافذة المنبثقة وتحميل السكريبت
    function openModal(cardType) {
        const formattedCardName = cardType.charAt(0).toUpperCase() + cardType.slice(1);
        modalTitle.textContent = `Special Offer for ${formattedCardName} Card`;
        
        // نفرغ المحتوى القديم لمنع تكرار التحميل
        lockerPlaceholder.innerHTML = '';
        
        //====================================================================//
        //=========== ابدأ التعديل من هنا (خاص بصاحب الصفحة) ==================//
        //====================================================================//

        // ## الجزء الأول: متغيرات الإعدادات ##
        // أنشئ وسم السكريبت الخاص بالمتغيرات
        const configScript = document.createElement('script');
        configScript.type = 'text/javascript';
        // استبدل السطر التالي بالسطر الذي يحتوي على المتغيرات الخاصة بك
        configScript.innerHTML = 'var TwGvh_PXt_miHVec={"it":4501921,"key":"89906"};';
        
        // ## الجزء الثاني: ملف الجافا سكربت الرئيسي ##
        // أنشئ وسم السكريبت الخاص بالملف الرئيسي
        const mainScript = document.createElement('script');
        // استبدل الرابط التالي بالرابط الرئيسي الخاص بك
        mainScript.src = 'https://d3qr4eoze2yrp4.cloudfront.net/121cc9d.js';
        
        // ## الجزء الثالث: دالة تشغيل اللوكر ##
        // هذا الكود يتأكد أن السكريبت الرئيسي قد تم تحميله قبل تشغيل اللوكر
        mainScript.onload = function() {
            try {
                // استبدل السطر التالي بدالة التشغيل الخاصة بك
                _Ew();
            } catch (e) {
                console.error("Locker trigger function failed:", e);
                lockerPlaceholder.innerHTML = 'An error occurred while loading the offer.';
            }
        };

        //====================================================================//
        //=========== انتهي من التعديل هنا (خاص بصاحب الصفحة) =================//
        //====================================================================//

        // الكود التالي يقوم بإضافة الأكواد التي عدلتها إلى الصفحة
        mainScript.onerror = function() {
             console.error("Failed to load the main locker script.");
             lockerPlaceholder.innerHTML = 'Could not load the offer. Please try again later.';
        };
        lockerPlaceholder.appendChild(configScript);
        lockerPlaceholder.appendChild(mainScript);
        
        // إظهار النافذة المنبثقة
        modalOverlay.classList.add('active');
    }

    // هذه الدالة تقوم بإخفاء النافذة
    function closeModal() {
        modalOverlay.classList.remove('active');
    }

    // إضافة مستمع حدث 'click' لكل بطاقة
    allCards.forEach(card => {
        card.addEventListener('click', () => {
            const cardType = card.dataset.card; 
            openModal(cardType);
        });
    });

    // إضافة مستمع حدث 'click' لزر الإغلاق
    closeModalButton.addEventListener('click', () => {
        closeModal();
    });

    // إضافة مستمع حدث لإغلاق النافذة عند الضغط خارجها
    modalOverlay.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
});
