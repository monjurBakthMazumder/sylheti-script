# Sylheti Script

Sylheti Script হল একটি মজাদার এবং সিলেটি ভাষা-ভিত্তিক স্ক্রিপ্টিং ল্যাঙ্গুয়েজ, যা JavaScript-এর মতো ইন্টারপ্রেটেড। এটি CLI (Command Line Interface) এবং Web-এ রান করতে সক্ষম।

## 📌 Features
- ✅ **সিলেটি ভাষায় কোডিং** (যেমন: `dororeba` for variable declaration, `dekauba` for print)
- ✅ **ইন্টারপ্রেটেড স্ক্রিপ্টিং ল্যাঙ্গুয়েজ** (JavaScript/Python-এর মতো)
- ✅ **CLI & Web Execution**
- ✅ **সহজ সিনট্যাক্স**

---

## 🔧 Installation

```sh
npm install -g sylheti-script
```

---

## 🚀 Quick Start

### ১. একটি `hello.syl` ফাইল তৈরি করুন:

```sylheti
# ভেরিয়েবল ঘোষণা
 dororeba nam = "সিলেটি স্ক্রিপ্ট!"
 
# প্রিন্ট করুন
 dekauba(nam)
```

### ২. রান করুন:

```sh
sylheti hello.syl
```

আউটপুট:
```sh
সিলেটি স্ক্রিপ্ট!
```

---

## 📜 Syntax

### 🔹 ১. **Variable Declaration (dororeba)**
```sylheti
dororeba num = 10
dororeba text = "Hello"
```

### 🔹 ২. **Print Statement (dekauba)**
```sylheti
dekauba("Hello, World!")
```

### 🔹 ৩. **If-Else Condition (jodi - naile)**
```sylheti
jodi (num > 5) {
    dekauba("বড়")
} naile {
    dekauba("ছোট")
}
```

### 🔹 ৪. **Loops (barbar - dumse)**
```sylheti
barbar (i < 5) {
    dekauba(i)
    i = i + 1
}
```

```sylheti
dumse (dororeba i = 0; i < 5; i = i + 1) {
    dekauba(i)
}
```

### 🔹 ৫. **Functions (kam)**
```sylheti
kam jog(x, y) {
    phetran x + y
}

dororeba result = jog(5, 3)
dekauba(result)
```

---

## 🎭 Fun Syntax
- **"ar naile"** – Else if
- **"phetran"** – Return
- **"dumlaga"** – Break
- **"thamba"** – Continue

---

## 🌍 Contributors
Sylheti Script তৈরি করেছে সিলেটি ভাষা প্রেমীরা। অবদান রাখতে চাইলে Pull Request পাঠাও! 🚀

---

## 📜 License
MIT License
