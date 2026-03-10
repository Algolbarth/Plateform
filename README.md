# 🏃‍➡️ Plateform

A plateform game (mario like) inspired by the first New Super Mario Bros. on Nintendo DS and an original level.

## 🕹️ Install

Download release files here :

### [🪟 For Windows](https://github.com/Algolbarth/plateform/blob/main/release/windows)

### [🐧 For Linux](https://github.com/Algolbarth/plateform/blob/main/release/linux)

## 🛠️ Requirements for dev
Plateform use Tauri (typescript/svelte + Rust) to build a webapp and a desktop application with the same architecture. Deno is used to compile typescript.

### [⚙️ Rust](https://github.com/rust-lang/rust)

Install using shell :
```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
source $HOME/.cargo/env
```

Check is Rust is properly installed :
```
rustc --version
cargo --version
```

### [🦕 Deno](https://github.com/denoland/deno)

Install using shell :
```
curl -fsSL https://deno.land/install.sh | sh
```

Install using npm :
```
npm install -g deno
```

Install using cargo :
```
cargo install deno --locked
```

Check is Deno is properly installed :
```
deno --version
```

### [🟡​🔵​ Tauri](https://github.com/tauri-apps/tauri)

Install Tauri requirements using shell :
```
sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
```

### [Plateform Files](https://github.com/Algolbarth/plateform)

Clone Plateform repository :
```
git clone https://github.com/Algolbarth/plateform.git
cd plateform
deno install
```

Run Plateform as an webapp :
```
deno task dev
```

Build Plateform as a linux app :
```
deno task tauri build
```

Build Plateform as an Windows app :
```
deno task tauri build --runner cargo-xwin --target x86_64-pc-windows-msvc
```