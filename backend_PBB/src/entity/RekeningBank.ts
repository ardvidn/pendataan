import { Column, Entity, Index } from "typeorm";

@Index("penduduk_rek_bank_fk", ["noPenduduk"], {})
@Index("rekening_bank_pkey", ["noRekening"], { unique: true })
@Entity("rekening_bank", { schema: "public" })
export class RekeningBank {
  @Column("character", { primary: true, name: "no_rekening", length: 30 })
  noRekening!: string;

  @Column("character", { name: "no_penduduk", nullable: true, length: 30 })
  noPenduduk!: string | null;

  @Column("character varying", { name: "ket_bank", nullable: true, length: 30 })
  ketBank!: string | null;
}
