import { Column, Entity, Index } from "typeorm";

@Index("dafnom_rinci_gelondongan_pkey", ["kdDati2", "kdKecamatan", "kdKelurahan", "kdPropinsi", "thnPajak", "thnPembentukan"], { unique: true })
@Entity("dafnom_rinci_gelondongan", { schema: "public" })
export class DafnomRinciGelondongan {
  @Column("character", { primary: true, name: "kd_propinsi", length: 2 })
  kdPropinsi!: string;

  @Column("character", { primary: true, name: "kd_dati2", length: 2 })
  kdDati2!: string;

  @Column("character", { primary: true, name: "kd_kecamatan", length: 3 })
  kdKecamatan!: string;

  @Column("character", { primary: true, name: "kd_kelurahan", length: 3 })
  kdKelurahan!: string;

  @Column("character", { primary: true, name: "thn_pembentukan", length: 4 })
  thnPembentukan!: string;

  @Column("character", { primary: true, name: "thn_pajak", length: 4 })
  thnPajak!: string;

  @Column("character varying", {
    name: "nm_dokumen",
    nullable: true,
    length: 50,
  })
  nmDokumen!: string | null;

  @Column("bigint", { name: "jumlah_gelondongan", nullable: true })
  jumlahGelondongan!: string | null;

  @Column("bigint", { name: "jumlah_sismiop", nullable: true })
  jumlahSismiop!: string | null;

  @Column("bigint", { name: "saldo_gelondongan", nullable: true })
  saldoGelondongan!: string | null;
}
