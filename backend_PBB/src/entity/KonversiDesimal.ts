import { Column, Entity, Index } from "typeorm";

@Index("konversi_desimal_pkey", ["bilangan_10"], { unique: true })
@Entity("konversi_desimal", { schema: "public" })
export class KonversiDesimal {
  @Column("character", { primary: true, name: "bilangan_10", length: 2 })
  bilangan_10!: string;

  @Column("character", { name: "bilangan_62", nullable: true, length: 1 })
  bilangan_62!: string | null;
}
