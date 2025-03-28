import { Column, Entity, Index } from "typeorm";

@Index("astek_pkey", ["noAstek"], { unique: true })
@Index("penduduk_astek_fk", ["noPenduduk"], {})
@Entity("astek", { schema: "public" })
export class Astek {
  @Column("character", { primary: true, name: "no_astek", length: 30 })
  noAstek!: string;

  @Column("character", { name: "no_penduduk", nullable: true, length: 30 })
  noPenduduk!: string | null;
}
