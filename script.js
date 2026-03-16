// سلة المشتريات
let cart = [];
let total = 0;

// إضافة منتج للسلة
function addToCart(name, price) {
    cart.push({name: name, price: price});
    total += price;
    updateCart();
    document.getElementById("cartCount").textContent = cart.length;
}

// تحديث عرض السلة
function updateCart(){

let cartItems = document.getElementById("cartItems");

cartItems.innerHTML = "";

cart.forEach((item,index)=>{

let li = document.createElement("li");

li.innerHTML = `
${item.name} - ${item.price} ج
<button class="remove-btn" onclick="removeFromCart(${index})">✖</button>
`;

cartItems.appendChild(li);

});

document.getElementById("total").textContent = total;

/* تحديث عدد المنتجات في السلة */
document.getElementById("cartCount").textContent = cart.length;

}
// حذف عنصر من السلة
function removeFromCart(index) {
    total -= cart[index].price;   // خصم السعر من الإجمالي
    cart.splice(index, 1);        // حذف العنصر من المصفوفة
    updateCart();                 // تحديث العرض
}

// إنهاء الطلب
function checkout() {
    if(cart.length === 0){
        alert("السلة فارغة، أضف منتجات أولاً");
        return;
    }

    let orderText = "طلبك:\n";
    cart.forEach(item => {
        orderText += item.name + " - " + item.price + " ج.م\n";
    });
    orderText += "الإجمالي: " + total + " ج.م";

    alert(orderText);

    // إعادة تعيين السلة بعد الطلب
    cart = [];
    total = 0;
    updateCart();
}
// اظهار نموذج الطلب
function showOrderForm(){

    if(cart.length === 0){
        alert("السلة فارغة");
        return;
    }

    document.getElementById("orderForm").style.display = "block";
}

// اظهار الفورم
function showOrderForm(){

if(cart.length === 0){
alert("السلة فارغة");
return;
}

document.getElementById("orderPopup").style.display = "flex";

}

// اغلاق الفورم
function closePopup(){
document.getElementById("orderPopup").style.display = "none";
}

// تأكيد الطلب
function showOrderForm(){
document.getElementById("orderForm").style.display="block";
}

function confirmOrder(){

let name = document.getElementById("customerName").value;
let phone = document.getElementById("phoneNumber").value;
let address = document.getElementById("address").value;
let city = document.getElementById("city").value;

let message = "طلب جديد من موقع قهوة نوح %0A%0A";

message += "الاسم: " + name + "%0A";
message += "التليفون: " + phone + "%0A";
message += "العنوان: " + address + "%0A";
message += "المحافظة: " + city + "%0A%0A";

message += "الطلبات:%0A";

cart.forEach(function(item){

message += item.name + " - " + item.price + " ج%0A";

});

let total = document.getElementById("total").innerText;

message += "%0Aالإجمالي: " + total + " ج";

let whatsappNumber = "201123385820";

let url = "https://wa.me/" + whatsappNumber + "?text=" + message;

window.open(url);

}


let selectedProduct = "";
let selectedPrice = 0;

// فتح قائمة الوزن
function chooseWeight(name, price){

selectedProduct = name;
selectedPrice = price;

document.getElementById("weightPopup").style.display = "flex";

}

// اغلاق القائمة
function closeWeight(){
document.getElementById("weightPopup").style.display = "none";
}

// إضافة المنتج بالسعر حسب الوزن
function addWeight(weight, multiplier){

let finalPrice = selectedPrice * multiplier;

let productName = selectedProduct + " - " + weight;

cart.push({name: productName, price: finalPrice});

total += finalPrice;

updateCart();

closeWeight();

}
function openStore(){
document.getElementById("startPage").style.display="none";
}