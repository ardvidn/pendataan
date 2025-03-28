import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("user_Account")
export class userAccount {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ unique: true })
  username!: string;

  @Column()
  password!: string;

  @Column({ default: "user", nullable: false })
  role!: string;
}
