import { Column, Entity, Index } from "typeorm";

@Index("pbb_minimal_pkey", ["kdDati2", "kdPropinsi", "thnPbbMinimal"], {
  unique: true,
})
@Entity("pbb_minimal", { schema: "public" })
export class PbbMinimal {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "thn_pbb_minimal", length: 4 })
  thnPbbMinimal!: string;

  @Column("character varying", {
    name: "no_sk_pbb_minimal",
    nullable: true,
    length: 30,
  })
  noSkPbbMinimal!: string | null;

  @Column("timestamp without time zone", {
    name: "tgl_sk_pbb_minimal",
    nullable: true,
  })
  tglSkPbbMinimal!: Date | null;

  @Column("integer", { name: "nilai_pbb_minimal" })
  nilaiPbbMinimal!: number;

  @Column("timestamp without time zone", {
    name: "tgl_rekam_pbb_minimal",
    default: () => "statement_timestamp()",
  })
  tglRekamPbbMinimal!: Date;

  @Column("character", { name: "nip_perekam_pbb_minimal", length: 18 })
  nipPerekamPbbMinimal!: string;
}
