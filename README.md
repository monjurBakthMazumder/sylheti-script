
# Sylheti Script

**Sylheti Script** একটি মজাদার এবং ইউনিক স্ক্রিপ্টিং ভাষা যা Sylheti ভাষার উপর ভিত্তি করে তৈরি। এটি JavaScript দ্বারা অনুপ্রাণিত, তবে এতে কোডিং করা যায় Sylheti ভাষায়। এই ভাষায় কোড লিখতে, তোমরা প্রোগ্রামিং শিখতে পারবে এমনভাবে যেটা খুব সহজ এবং পরিচিত অনুভূত হবে।

---

## 📌 বৈশিষ্ট্যসমূহ

- ✅ **Sylheti ভাষায় কোডিং**: কোড লেখার সময় মনে হবে, “এই তো, আমার কথাই বলা হইলো!” — Sylheti ভাষায় সহজেই কোডিং করতে পারবে।
- ✅ **ইন্টারপ্রেটেড ভাষা**: JavaScript বা Python-এর মতো, টাইপ ডিক্লেয়ার করার ঝামেলা নেই। Sylheti Script স্বয়ংক্রিয়ভাবে টাইপ হ্যান্ডেল করে।
- ✅ **CLI & ওয়েব এক্সিকিউশন**: এটি টার্মিনাল (CLI) এবং ওয়েব উভয় জায়গায় কাজ করে।
- ✅ **সহজ সিনট্যাক্স**: Sylheti ভাষায় কথোপকথনের মতো কোডিং, যা শেখা সহজ।
- ✅ **সম্পূর্ণ কনস্ট্রাক্ট সমর্থন**: শর্ত (condition), লুপ, ফাংশন, অ্যারে, এবং আরও অনেক কিছু।
- ✅ **মজাদার কোড চ্যালেঞ্জ**: Sylheti ভাষায় কোডিং শিখতে মজা করো!

---

## 🔧 ইনস্টলেশন

Sylheti Script ব্যবহার শুরু করতে, তোমার Node.js থাকতে হবে। তারপর, তুমি এটিকে গ্লোবালি ইনস্টল করতে পারো অথবা GitHub থেকে কোড ক্লোন করতে পারো।

### npm-এর মাধ্যমে Sylheti Script ইনস্টল করো (Not available):

```sh
npm install -g sylheti-script
```

### অথবা GitHub থেকে কোড ক্লোন করো:

```sh
git clone https://github.com/monjurBakthMazumder/sylheti-script
cd sylheti-script
npm install
```

এটি Sylheti Script এবং তার ডিপেনডেন্সি ইনস্টল করবে।

---

## 🚀 দ্রুত শুরু

### ১. একটি `hello.syl` ফাইল তৈরি করো:

```sylheti
// ভেরিয়েবল ঘোষণা
dororeba nam = "Sylheti Script!"

// প্রিন্ট স্টেটমেন্ট
dekareba(nam)
```

### ২. কোডটি চালাও:

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

ভেরিয়েবল ঘোষণা করতে `dororeba` ব্যবহার করো। এটি Sylheti ভাষার মতোই মনে হবে।

**উদাহরণ:**

```sylheti
dororeba age = 30
dororeba name = "Ahmed"
dekareba(name)  // আউটপুট: Ahmed
```

### 🔹 **প্রিন্ট স্টেটমেন্ট (`dekareba`)**

ভেরিয়েবল বা টেক্সট প্রিন্ট করতে `dekareba` ব্যবহার করো।

**উদাহরণ:**

```sylheti
dororeba greeting = "Welcome to Sylheti Script!"
dekareba(greeting)  // আউটপুট: Welcome to Sylheti Script!
```

### 🔹 **কন্ডিশনাল স্টেটমেন্ট (`jodi - naile`)**

শর্ত অনুযায়ী কাজ করানোর জন্য `jodi` (if) এবং `naile` (else) ব্যবহার করো।

**উদাহরণ:**

```sylheti
dororeba age = 20
jodi (age > 18) {
    dekareba("You are an adult!")
} naile {
    dekareba("You are not an adult!")
}
```

### 🔹 **লুপ**

1. **`dumse` লুপ (while loop)**  
   এই লুপটি শর্ত পূর্ণ না হওয়া পর্যন্ত চলতে থাকে।

**উদাহরণ:**

```sylheti
dororeba i = 0
dumse (i < 5) {
    dekareba(i)
    i = i + 1
}
```

আউটপুট:
```
0
1
2
3
4
```


### 🔹 **অ্যারেগুলা (`dororeba`)**

অ্যারেগুলা হল একাধিক মানের একটি সংগ্রহ। `dororeba` দিয়ে এটি ডিক্লেয়ার করা হয়।

**উদাহরণ:**

```sylheti
dororeba fruits = ["apple", "banana", "cherry"]
dekareba(fruits[1])  // আউটপুট: banana
```



### 🔹 **Switch-Case: `mile` এবং `naile`**

বিভিন্ন শর্তে ভিন্ন কোড চালানোর জন্য `mile` (case) এবং `naile` (default) ব্যবহার করো।

**উদাহরণ:**

```sylheti
dororeba day = "Monday"
mile (day) {
    "Monday" {
        dekareba("Start of the week");
    }
    "Tuesday" {
        dekareba("Second day!");
    }
    naile {
        dekareba("Another day!");
    }
}
```

---

## 🛠 ডিবাগিং

ডিবাগিং করতে `bujha` (ভেরিয়েবল প্রিন্ট) এবং `ghoribari` (এরর লগ) ব্যবহার করো। এটি সমস্যা চিহ্নিত করতে সাহায্য করবে।

**উদাহরণ:**

```sylheti
suru kor {
    dororeba result = 10 / 0
} vul dor (error) {
    dekareba("Error: " + error)
}
```

---

## 🌍 অবদানকারী

Sylheti Script একটি ওপেন সোর্স প্রকল্প, যা Sylheti ভাষাপ্রেমীদের দ্বারা তৈরি। যদি তুমি এটি উন্নত করতে ইচ্ছুক হও, তাহলে GitHub-এ Pull Request পাঠাও।

---

## 📜 লাইসেন্স

Sylheti Script MIT লাইসেন্সের অধীনে মুক্ত। বিস্তারিত জানতে [LICENSE](LICENSE) ফাইল দেখুন।

---

## 📝 ভবিষ্যৎ আপডেট

Sylheti Script আরও উন্নত হবে, নতুন নতুন ফিচার সহ:

- **বেটার IDE সাপোর্ট**: সেন্ট্যাক্স হাইলাইটিং, অটো-কমপ্লিশন ইত্যাদি।
- **ওয়েব ফ্রেমওয়ার্কস**: Sylheti Script দিয়ে ওয়েব অ্যাপ বিল্ড করতে পারবে।
- **এরর রিপোর্টিং টুলস**: উন্নত ত্রুটি হ্যান্ডলিং সিস্টেম।

---

## 🎤 Sylheti কোড কোটস

- "যদি তুমি কোডিং করতে করতে নিজের ভুল বুঝে ফেলো, তাহলে তুমি প্রকৃত প্রোগ্রামার!" – Sylheti Script
- "জীবন একটা কোড; বাগের সাথে বসবাস করতে শিখো!"
- "প্রোগ্রামিংয়ের মজা হচ্ছে, কোডে হোচট খাওয়া!"

---

### উন্নত ফিচারসমূহ

- **ডাইনামিক টাইপিং**: Sylheti Script স্বয়ংক্রিয়ভাবে টাইপ হ্যান্ডল করে, তাই তোমাকে টাইপ ডিক্লেয়ার করতে হবে না।
  
- **অ্যাসিঙ্ক ফাংশন**: আসন্ন আপডেটগুলিতে `kam async` এবং `await` সমর্থন যোগ করা হবে, যা দীর্ঘ সময় নিতে পারে এমন প্রক্রিয়াগুলিকে ম্যানেজ করতে সাহায্য করবে।

- **ফাইল হ্যান্ডলিং**: Sylheti Scriptে ফাইল

 পড়া এবং লেখার জন্য ফাংশন যোগ করা হবে, যা আরও শক্তিশালী অ্যাপ্লিকেশন তৈরি করতে সাহায্য করবে।

---

এই আপডেটেড ডকুমেন্টেশনটি Sylheti Scriptের সম্পূর্ণ ব্যবহারকারীদের জন্য আরও সহায়ক এবং বিস্তারিত তথ্য সরবরাহ করে।