import { Column, Entity, Index } from "typeorm";

@Index("sk_kanwil_pkey", ["kdDati2", "kdPropinsi", "thnSkKanwil"], {
  unique: true,
})
@Index("a9_1_ak", ["kdDati2", "kdPropinsi", "noSkKanwil", "thnSkKanwil"], {
  unique: true,
})
@Entity("sk_kanwil", { schema: "public" })
export class SkKanwil {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_sk_kanwil", length: 4 })
  thnSkKanwil!: string;

  @Column("character", { name: "no_sk_kanwil", length: 30 })
  noSkKanwil!: string;

  @Column("timestamp without time zone", { name: "tgl_sk_kanwil" })
  tglSkKanwil!: Date;

  @Column("timestamp without time zone", {
    name: "tgl_cetak_sk_kanwil",
    default: () => "statement_timestamp()",
  })
  tglCetakSkKanwil!: Date;

  @Column("character", { name: "nip_pencetak_sk_kanwil", length: 18 })
  nipPencetakSkKanwil!: string;
}
