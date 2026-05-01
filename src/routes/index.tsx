import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";
import SkillCard from "#/components/SkillCard";

export const Route = createFileRoute("/")({ component: Home });

export const skills: SkillRecord[] = [
	{
		id: "skill-001",
		title: "React Hooks Mastery",
		slug: "react-hooks-mastery",
		description:
			"Learn how to effectively use React Hooks to manage state and side effects in functional components.",
		category: "Frontend",
		tags: ["react", "hooks", "state-management"],
		installCommand: "npm install react@latest",
		createdAt: "2024-01-15T10:30:00Z",
		authorClerkId: "user_2NP8qB5X9kL7mQ",
		authorEmail: "instructor@example.com",
	},
	{
		id: "skill-002",
		title: "TypeScript Advanced Patterns",
		slug: "typescript-advanced-patterns",
		description:
			"Master advanced TypeScript patterns including generics, decorators, and utility types for robust code.",
		category: "Backend",
		tags: ["typescript", "patterns", "type-safety"],
		installCommand: "npm install typescript@latest",
		createdAt: "2024-02-20T14:45:00Z",
		authorClerkId: "user_3RP7cC9Y2kM8nP",
		authorEmail: "ts-expert@example.com",
	},
	{
		id: "skill-003",
		title: "Tailwind CSS Styling",
		slug: "tailwind-css-styling",
		description:
			"Build beautiful and responsive UIs using Tailwind CSS utility-first framework.",
		category: "Frontend",
		tags: ["css", "tailwind", "styling", "responsive-design"],
		installCommand: "npm install -D tailwindcss postcss autoprefixer",
		createdAt: "2024-03-05T09:15:00Z",
		authorClerkId: "user_4SQ8dD0Z3lN9oQ",
		authorEmail: "designer@example.com",
	},
	{
		id: "skill-004",
		title: "Node.js Server Development",
		slug: "nodejs-server-development",
		description:
			"Create scalable backend applications with Node.js, Express, and best practices for server architecture.",
		category: "Backend",
		tags: ["nodejs", "express", "server", "backend"],
		installCommand: "npm install express cors dotenv",
		createdAt: "2024-04-10T11:20:00Z",
		authorClerkId: "user_5TR9eE1A4mO0pR",
		authorEmail: "backend-dev@example.com",
	},
	{
		id: "skill-005",
		title: "Database Design & SQL",
		slug: "database-design-sql",
		description:
			"Learn database design principles, SQL queries, and optimization techniques for efficient data management.",
		category: "Database",
		tags: ["sql", "database", "postgresql", "optimization"],
		installCommand: "npm install pg sequelize",
		createdAt: "2024-04-25T16:00:00Z",
		authorClerkId: "user_6US0fF2B5nP1qS",
		authorEmail: "dba@example.com",
	},
];

function Home() {
	return (
		<div id="home">
			<section className="hero">
				<div className="copy">
					<h1>
						The Registry for <br />
						<span className="text-gradient">Agentic Intelligence</span>
					</h1>

					<p>
						A high-performance registry for procedural agent skills. Discover,
						publish, and share your agent capabilities with the community.
					</p>

					<div className="actions">
						<Link to="/skills" className="btn-primary">
							<Terminal size={18} />
							<span>Browse Registry</span>
						</Link>

						<Link to="/skills/new" className="btn-secondary">
							Publish Skill
						</Link>
					</div>
				</div>
			</section>

			<section className="latest">
				<div className="space-y-2">
					<h2>
						Recently Created <span className="text-gradient">Skills</span>
					</h2>
					<p>
						{" "}
						Latest skills loaded from database in descending creation order.
					</p>
				</div>

				<div>
					{skills.length > 0 ? (
						skills.map((skill) => <SkillCard key={skill.id} {...skill} />)
					) : (
						<p>No skills available.</p>
					)}
				</div>
			</section>
		</div>
	);
}
