<script lang="ts">
	import { Download, GiftBox, Orders, WishlistTwo } from '../svg';
</script>

<div class="profile__main">
	<div class="profile__main-top pb-80">
		<div class="row align-items-center">
			<div class="col-md-6">
				<div class="profile__main-inner d-flex flex-wrap align-items-center">
					<div class="profile__main-thumb">
						<img src="/img/users/user-10.jpg" alt="" />
						<div class="profile__main-thumb-edit">
							<input id="profile-thumb-input" class="profile-img-popup" type="file" />
							<label for="profile-thumb-input"><i class="fa-light fa-camera"></i></label>
						</div>
					</div>
					<div class="profile__main-content">
						<h4 class="profile__main-title">ברוך הבא, מר מנהל!</h4>
						<p>יש לך <span>08</span> התראות</p>
					</div>
				</div>
			</div>
			<div class="col-md-6">
				<div class="profile__main-logout text-sm-end">
					<a href="/login" class="tp-logout-btn">התנתקות</a>
				</div>
			</div>
		</div>
	</div>
	<div class="profile__main-info">
		<div class="row gx-3">
			<div class="col-md-3 col-sm-6">
				<div class="profile__main-info-item">
					<div class="profile__main-info-icon">
						<span>
							<span class="profile-icon-count profile-download">2</span>
							<Download />
						</span>
					</div>
					<h4 class="profile__main-info-title">הורדות</h4>
				</div>
			</div>
			<div class="col-md-3 col-sm-6">
				<div class="profile__main-info-item">
					<div class="profile__main-info-icon">
						<span>
							<span class="profile-icon-count profile-order">5</span>
							<Orders />
						</span>
					</div>
					<h4 class="profile__main-info-title">הזמנות</h4>
				</div>
			</div>
			<div class="col-md-3 col-sm-6">
				<div class="profile__main-info-item">
					<div class="profile__main-info-icon">
						<span>
							<span class="profile-icon-count profile-wishlist">10</span>
							<WishlistTwo />
						</span>
					</div>
					<h4 class="profile__main-info-title">רשימת משאלות</h4>
				</div>
			</div>
			<div class="col-md-3 col-sm-6">
				<div class="profile__main-info-item">
					<div class="profile__main-info-icon">
						<span>
							<span class="profile-icon-count profile-wishlist">07</span>
							<GiftBox />
						</span>
					</div>
					<h4 class="profile__main-info-title">קופסת מתנה</h4>
				</div>
			</div>
		</div>
	</div>
</div>
