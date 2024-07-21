---
sidebar_position: 3
---

# Maintain Versioning via Control Pull Request (PR)
Untuk tahapan maintain version, jika bisa page sebelumnya difahami terlebih dahulu, pada section ini kita akan mulai mengimplementasika teknisnya agar lebih gampang difahami dan bisa mengetahui perbedaan dari setiap versinya, bisa dilihat pada bagan gambar dibawah ini, dengan menggunakan bagan dibawah akan lebih mudah di bayangkan dan diintegrasikan khususnya.

![image](./img/branching-sop.jpg)

### 1st : Gambaran Branch Develop dan Branch target Rilis berikutnya
Pada basic project, sebenarnya branch hanya 1 yaitu `master`, tetapi pada saat proses development dan versioning kita memerlukan branch-branch yang di gunakan untuk / sebagai artifact dimana sebelumnya jg bisa kita rollback versi apps yang pernah kita develop

![image](./img/v1-apps.png)

Dimana versi branch awal kita akan tampak seperti berikut

![image](./img/branch-origin-project.jpg)

Untuk selanjutnya kita akan mencoba membuat 1 feature yang bisa kita jadikan sebagai fitur baru untuk kita buat di release terbaru

![image](./img/setup-develop-workspace.jpg)

### 2nd : Teknis Setup Proses Develop
Selanjutnya kita akan melakukan teknis agar dapat seperti pada gambar diatas, berikut kita akan mulai dengan inisialisasi update 

![image](./img/buat-simple-perubahan.png)

Ditahapan ini kita akan membuat simple perubahan dahulu, pertama dari README.md, selanjutnya kita buat branch baru untuk branch develop (source) yaitu `feat/multiuser` dan `v1` untuk target merge branch, dan dimana nanti branch `v1` ini akan di merge ke production yaitu ke branch `master`

```.sh
~$ git branch feat/multiuser
~$ git checkout feat/multiuser 
M       README.md
Switched to branch 'feat/multiuser'
```

![image](./img/command-1.png)

Berikutnya

![image](./img/command-2.png)

Kita coba cek all branch dengan mengetikan command `git branch -a`

![image](./img/check-all-branch.png)

Selanjutnya lakukan command seperti berikut

```.sh
~$ git branch -a
~$ git checkout master
M       README.md
Switched to branch 'master'
~$ git push origin v1.0 
~$ git push origin feat/multiuser
```

Seperti tampak pada gambar berikut

![image](./img/push-two-branch-after-creating.png)

Setelah di push pada repository akan langsung muncul all branch jika kita lihat seperti dibawah ini

![image](./img/repo-all-branch.png)

Berikutnya kita akan checkout ke branch `feat/multiuser` kemudian kita lakukan commit dan push update dari file sebelumnya ke branch tersebut sebagai berikut

![image](./img/push-to-branch-develop.png)

Secara otomatis pada repository akan muncul comparasi branch seperti dibawah ini, dan selanjutnya kita buatkan PR

![image](./img/prepare-create-pr.png)

Klik pada tombol `Compare & pull request`, buat title dan deskripsi dari PR tersebut, dan kemudian arahkan source branch `feat/multiuser` ke `v1`, seperti pada gambar berikut

![image](./img/pr-target-develop.png)

Maka dari itu kondisi saat ini kurang lebih branch akan tampak seperti pada gambar berikut

![image](./img/first-condition.jpg)

_Done & Soon..._

**Maintain branch for fix issue / bug and release of apps**

_To be next journals..._