

# Sylheti Script

**Sylheti Script** হইলো এক্টা মজাদার, সিলেটি ভাষা-ভিত্তিক স্ক্রিপ্টিং ল্যাঙ্গুয়েজ, যা JavaScript-এর মতো। এই ল্যাঙ্গুয়েজটা বিশেষভাবে সিলেটি ভাষায় কোডিং করার উদ্দেশ্যে তৈরি করা হইছে, আর এটি CLI (Command Line Interface) এবং ওয়েব উভয় জায়গায় চলতে পারে। Sylheti Script আপনাকে কোডিংয়ের জগতের সাথে মজাদার এবং সহজে পরিচিত করাইবে।

## 📌 বৈশিষ্ট্যসমূহ
- ✅ **সিলেটি ভাষায় কোডিং**: সিলেটি ভাষায় কোড লিখে কোডিং শেখার মজার অভিজ্ঞতা (যেমন: `dororeba` ভেরিয়েবল ডিক্লেয়ার করার জন্য, `dekauba` প্রিন্ট করার জন্য)।
- ✅ **ইন্টারপ্রেটেড ল্যাঙ্গুয়েজ**: JavaScript বা Python-এর মতো।
- ✅ **CLI & Web Execution**: কমান্ড লাইন অথবা ওয়েবের মাধ্যমে কোড চালানো যায়।
- ✅ **সহজ সিনট্যাক্স**: সিলেটি ভাষায় কোড লেখা সহজ এবং স্বাভাবিক।
- ✅ **অন্যান্য বৈশিষ্ট্য**: লুপ, কন্ডিশনাল, ফাংশন, অ্যারে ইত্যাদি।

---

## 🔧 ইনস্টলেশন

### 1. Node.js ইনস্টল করে Sylheti Script ইনস্টল করতে:

```sh
npm install -g sylheti-script
```

### 2. অথবা GitHub থেকে কোড ক্লোন করে:

```sh
git clone https://github.com/your-repo/sylheti-script.git
cd sylheti-script
npm install
```

---

## 🚀 দ্রুত শুরু

### 1. একটি `hello.syl` ফাইল তৈরি করুন:

```sylheti
# ভেরিয়েবল ঘোষণা
dororeba nam = "Sylheti Script!"

# প্রিন্ট করুন
dekauba(nam)
```

### 2. রান করুন:

```sh
sylheti hello.syl
```

আউটপুট:
```sh
Sylheti Script!
```

---

## 📜 সিনট্যাক্স

### 🔹 **ভেরিয়েবল ঘোষণা (`dororeba`)**

ভেরিয়েবল ডিক্লেয়ার করতে `dororeba` ব্যবহার করুন:

```sylheti
dororeba age = 25
dororeba name = "Robin"
```

### 🔹 **প্রিন্ট স্টেটমেন্ট (`dekauba`)**

ভেরিয়েবল অথবা টেক্সট প্রিন্ট করতে `dekauba` ব্যবহার করুন:

```sylheti
dekauba("Hello, Sylheti Script!")
dekauba(name)
```

### 🔹 **কন্ডিশনাল (`jodi - naile`)**

যদি কোন শর্ত সঠিক হয়, তাহলে কিছু কাজ হবে। অন্যথায় অন্য কাজ হবে:

```sylheti
jodi (age > 18) {
    dekauba("আপনি প্রাপ্তবয়স্ক!")
} naile {
    dekauba("আপনি প্রাপ্তবয়স্ক নন!")
}
```

### 🔹 **লুপ**

1. **`barbar` লুপ:**

```sylheti
barbar (i < 5) {
    dekauba(i)
    i = i + 1
}
```

2. **`dumse` লুপ:**

```sylheti
dumse (dororeba i = 0; i < 5; i = i + 1) {
    dekauba(i)
}
```

### 🔹 **ফাংশন (`kam`)**

ফাংশন তৈরি করতে `kam` ব্যবহার করুন:

```sylheti
kam add(x, y) {
    firotja x + y
}

dororeba result = add(5, 3)
dekauba(result)
```

### 🔹 **অ্যারেগুলা (`dol`)**

অ্যারেগুলা ব্যবহারের জন্য `dol`:

```sylheti
dororeba myArray = [1, 2, 3, 4, 5]
dekauba(myArray[0])  # আউটপুট: 1
```

---

## 🎭 মজাদার সিনট্যাক্স
- **"ar naile"** – Else if
- **"firotja"** – Return
- **"ubabeta"** – Break
- **"salaiyaja"** – Continue
- **"bujha"** – Try
- **"ghoribari"** – Catch
- **"annda"** – Throw

---

## 🛠 ডিবাগিং

ডিবাগিংয়ের জন্য `bujha` ও `ghoribari` ব্যবহার করুন:

```sylheti
bujha {
    dororeba result = 10 / 0
} ghoribari (error) {
    dekauba("ত্রুটি: " + error)
}
```

---

## 🌍 অবদানকারী

Sylheti Script তৈরি করেছেন সিলেটি ভাষা প্রেমীরা। আপনি যদি অবদান রাখতে চান, তাহলে pull request পাঠাতে পারেন।

---

## 📜 লাইসেন্স

Sylheti Script MIT লাইসেন্সের অধীনে প্রকাশিত। বিস্তারিত জানতে [LICENSE](LICENSE) ফাইল দেখুন।

---

### 📝 ভবিষ্যৎ আপডেট

ভবিষ্যতে Sylheti Script আরও ফিচার ও উন্নতি পাবে, যেমন UI, Web Frameworks সমর্থন এবং আরও অনেক নতুন ফিচার!
```

This translation keeps the structure and technical details intact while localizing the content to Sylheti. Let me know if you need any adjustments!