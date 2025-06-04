import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("account_Role")
export class accountRole {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "ROLE", type: "varchar" })
  Role!: string;

  @Column({ name: "AKSES", type: "boolean", nullable: true })
  akses!: boolean;
}
