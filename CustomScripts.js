var notification = true;

function save_and_build() {
	studio.project.save(); 
	studio.project.build();
	if (notification)
		alert("Saved and built completed!");
}

// register
studio.menu.addMenuItem({
	name : "Custom\\Options\\Mute Notification",
	execute: function() { this.isChecked = !this.isChecked; notification = !this.isChecked },
    isChecked: !notification,
});

studio.menu.addMenuItem({
	name : "Custom\\Save And Build",
	execute: save_and_build,
	keySequence: "Ctrl+Alt+Shift+S",
});