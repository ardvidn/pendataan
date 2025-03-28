import { Column, Entity } from "typeorm";

@Entity("statkp", { schema: "public" })
export class Statkp {
  @Column("character varying", { name: "nmkp", nullable: true, length: 50 })
  nmkp!: string | null;

  @Column("character varying", { name: "nmkp2", nullable: true, length: 50 })
  nmkp2!: string | null;
}
