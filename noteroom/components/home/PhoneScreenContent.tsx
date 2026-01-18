import React from "react";

type PhoneScreenContentProps = {
	className?: string;
};

export default function PhoneScreenContent({ className }: PhoneScreenContentProps) {
	return (
		<div
			className={`phone-screen-scroll bg-white ${className ?? ""}`.trim()}
			style={{
				overflowY: "auto",
				overflowX: "hidden",
				WebkitOverflowScrolling: "touch",
			}}
		>
			<div className="space-y-6 p-5">
				<div>
					<div className="text-black text-2xl font-semibold">NoteRoom</div>
					<div className="text-black/60 text-sm">
						Knowledge, Accessible Anywhere.
					</div>
				</div>

				{[
					"Daily review checklist",
					"Top 5 study techniques",
					"Weekly focus tracker",
					"Reading highlights",
					"Quick notes",
					"Upcoming goals",
					"Recent uploads",
					"Pinned ideas",
				].map((item) => (
					<div
						key={item}
						className="rounded-xl bg-black/5 border border-black/10 p-4 text-black/90 text-sm"
					>
						{item}
					</div>
				))}
			</div>
		</div>
	);
}
