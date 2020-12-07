# コワーキングスペース座席管理demoアプリ
![top.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/429158/17059c3c-c2ee-4e66-fc3b-df6e6c3a603c.png)

## 使用言語・ライブラリ
- フロント
  - React Hooks
  - TypeScript
  - SPA
  - Material UI
  - node 14.7.0
- バックエンド
  - Ruby 2.6.5
  - Rails 6.0.3.4
  - APIモード
  - Puma
  - 別途リポジトリ(URL)

## 機能概要
- 店舗
  - 利用中の座席一覧
  - 座席管理
  - お知らせ配信
  - 作成・編集
  - ログイン・ログアウト
- ユーザー
  - 指定店舗の利用状況確認
  - 利用履歴参照
  - お知らせ確認
  - 作成・編集
  - ログイン・ログアウト
  
## 主な画面・機能説明
### 店舗
#### 利用中の座席一覧
![top.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/429158/17059c3c-c2ee-4e66-fc3b-df6e6c3a603c.png)
こちらの画面では座席の利用管理をしています。<br>
座席一覧の<br>
・青く数字で書かれている箇所が利用可能<br>
・赤く数字で書かれている箇所が利用中<br>
という状態わけになっています。<br>
番号をクリックすると対象の利用するお客様IDを聞かれるで、入力すると利用開始・終了となります。<br>

#### 座席管理
![スクリーンショット 2020-12-08 2.07.32.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/429158/6c071440-73ac-8b14-8d45-827f9ff1d540.png)
こちらの画面では使用する座席管理をしています。<br>
登録する場合は右上の『登録する』ボタンを押すとフォームをが出てきて、そのまま入力可能となっています。
![スクリーンショット 2020-12-08 2.07.40.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/429158/a94597a9-ab23-4dc1-5c4b-3b5292eeec85.png)
編集ボタンも同様に画面遷移せずに編集可能になっていてこちらはモーダルでる出力となります。

#### お知らせ配信
![スクリーンショット 2020-12-08 2.13.34.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/429158/a6d44542-5fb3-a1fb-0501-b2ef97407750.png)
こちらの画面ではユーザーにお知らせしたない内容管理しています。<br>
入力した後に、『未送信』の欄の一番右にある『配信する』ボタンを押すことによって、ユーザーに入力した内容が反映されるになっています。<br>
表示項目も履歴として、『未送信』・『送信済み』と分けて表示しています。<br>

### ユーザー
#### 利用状況
![スクリーンショット 2020-12-08 3.30.44.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/429158/dda90908-3e5d-78b9-1bf6-aba4ea68954e.png)
こちらの画面では右上のより選択した店舗の空き状況・利用履歴が閲覧できます。

#### お知らせ
![スクリーンショット 2020-12-08 3.32.49.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/429158/472a2278-e7e6-e4a1-c087-ca6b809f59fb.png)
こちらの画面では店舗よりお知らせしたい内容を表示しています。

### 共通
#### ログイン画面
![スクリーンショット 2020-12-08 3.34.33.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/429158/cca23745-53da-a849-4481-09b099ec856a.png)
こちらからログイン可能になっています。 <br>
店舗アカウントでログインの場合は右上の『店舗ログイン』リンクからログイン可能になっています。

#### 作成・編集
![スクリーンショット 2020-12-08 3.36.14.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/429158/b31f82be-dd81-ef2f-6e69-60f2b79ab9d4.png)
![スクリーンショット 2020-12-08 3.36.38.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/429158/ff27abf2-b4a3-483d-eaeb-035c1012553d.png)
作成はログイン画面より<br>
編集画面ログイン後サイドーより作成・編集可能です。

#### Flashメッセージ
![スクリーンショット 2020-12-08 3.39.26.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/429158/d12b4545-01bd-8d00-9e3e-3f3f77e1f7b4.png)
各種処理を行った場合フラッシュメッセージを上部に表示します。<br>
一定時間経過後に非表示になります。

#### エラーメッセージ
![スクリーンショット 2020-12-08 3.41.21.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/429158/0045e354-f90e-8927-d625-9296df96fdd3.png)
バックエンドより必要項目・バリデーションいかかっているものはフォーム上部に表示されます。

