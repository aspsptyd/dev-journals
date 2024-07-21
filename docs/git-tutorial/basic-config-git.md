---
sidebar_position: 1
---

# Konfigurasi Dasar Git
Pada dasarnya git juga harus ada konfigurasi dasar yang perlu di settup agar ketika proses maintain project lebih terstruktur dan tertata rapih, baik ketika akan rilis Apps baru atau fix troubleshot terhadap error yang muncul.

### a. Check Versi Git
Sebelumnya kita perlu mengecek apakah Git sudah terinstall atau belum di sistem komputer kita, yaitu dengan cara

```.sh
~$ git --version
git version 2.37.3
```

### b. Setup Global Config Git
Pastikan settingan dari konfigurasi global git pada local komputer kita sudah disetup seperti berikut

```.sh
~$ git config --global user.name "******"
~$ git config --global user.email "******@gmail.com"
~$ git config --list 
```

Response

```.sh
credential.helper=osxkeychain
user.name="******"
user.email="******@@gmail.com
core.excludesfile=/Users/sample/.gitignore_global
core.autocrlf=false
difftool.sourcetree.cmd=opendiff "$LOCAL" "$REMOTE"
difftool.sourcetree.path=
mergetool.sourcetree.cmd=/Applications/Sourcetree.app/Contents/Files/opendiff-w.sh "$LOCAL" "$REMOTE" -ancestor "$BASE" -merge "$MERGED"
mergetool.sourcetree.trustexitcode=true
commit.template=/Users/sample/.stCommitMsg
init.defaultbranch=master
pull.ff=true
pull.rebase=true
rebase.autostash=true
filter.lfs.clean=git-lfs clean -- %f
filter.lfs.smudge=git-lfs smudge -- %f
filter.lfs.process=git-lfs filter-process
filter.lfs.required=true
```

Jika setup sudah muncul seperti diatas artinya kita sudah dapat menggunakan git pada local project kita.