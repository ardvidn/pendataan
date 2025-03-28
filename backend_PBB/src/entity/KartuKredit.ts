import { Column, Entity, Index } from "typeorm";

@Index("kartu_kredit_pkey", ["noKartu"], { unique: true })
@Index("penduduk_kredit_fk", ["noPenduduk"], {})
@Entity("kartu_kredit", { schema: "public" })
export class KartuKredit {
  @Column("character", { primary: true, name: "no_kartu", length: 30 })
  noKartu!: string;

  @Column("character", { name: "no_penduduk", nullable: true, length: 30 })
  noPenduduk!: string | null;

  @Column("character varying", {
    name: "ket_kartu",
    nullable: true,
    length: 30,
  })
  ketKartu!: string | null;
}
