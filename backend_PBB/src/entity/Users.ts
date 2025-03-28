import { Column, Entity, Index } from "typeorm";

@Index("users_pkey", ["username"], { unique: true })
@Entity("users", { schema: "public" })
export class Users {
  @Column("character varying", { primary: true, name: "username", length: 10 })
  username!: string;

  @Column("character varying", { name: "password", nullable: true, length: 20 })
  password!: string | null;

  @Column("character varying", { name: "nama", nullable: true, length: 30 })
  nama!: string | null;

  @Column("character varying", { name: "nip", nullable: true, length: 18 })
  nip!: string | null;

  @Column("character", { name: "wewenang", nullable: true, length: 2 })
  wewenang!: string | null;
}
