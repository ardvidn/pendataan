import { Column, Entity, Index } from "typeorm";

@Index("askes_pkey", ["noAskes"], { unique: true })
@Index("penduduk_askes_fk", ["noPenduduk"], {})
@Entity("askes", { schema: "public" })
export class Askes {
  @Column("character", { primary: true, name: "no_askes", length: 30 })
  noAskes!: string;

  @Column("character", { name: "no_penduduk", nullable: true, length: 30 })
  noPenduduk!: string | null;
}
